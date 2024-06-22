import {
	ratelimit_10_per_10_M,
	ratelimit_3_per_1_H,
	ratelimit_3_per_1_day,
} from "@/lib/server/upstash-rate-limit"
import type { CTX } from "../../../trpc"
import { TRPCError } from "@trpc/server"
import { schema } from "@/server/db"
import { eq, sql } from "drizzle-orm"
import { MAX_NUMBER_OF_MESSAGES_PER_EMAIL } from "@/lib/constants"
import { sendEmail, sendEmailToMe } from "@/lib/server/send-email/send-email"

import { z } from "zod"
import { checkIfTheSenderEmailIsNotValid } from "@/lib/server/send-email/check-email-is-working"
export let sendMessageDTO = z.object({
	name: z
		.string()
		.min(1, "Please enter your name")
		.max(256, "Name too long (max 256 characters)"),
	email: z
		.string()
		.email("Please enter a valid email address")
		.max(256, "Email too long (max 256 characters)"),
	message: z
		.string()
		.min(1, "Please enter a message")
		.max(4096, "Message too long (max 4096 characters)"),
})
type SendMessageDTO = z.infer<typeof sendMessageDTO>

export let sendMessageOutputDto = z.promise(z.void())

export async function sendMessage({
	ctx,
	input,
}: {
	ctx: CTX
	input: SendMessageDTO
}) {
	try {
		let ipv6 = ctx.headers.get("x-forwarded-for") ?? "test"
		const { success } = await ratelimit_10_per_10_M.limit(ipv6)
		if (!success) {
			console.log("\x1b[1;33m%s\x1b[1;36m", `Rate limit exceeded for ${ipv6}`)
			throw new TRPCError({
				code: "FORBIDDEN",
				message: "You have sent too many messages, please try again later.",
			})
		}

		let senders = schema.senders
		let messages = schema.messages
		let sender = (
			await ctx.db
				.selectDistinct({
					id: senders.id,
					messageCount: sql<number>`cast(count(${messages.id}) as int)`,
				})
				.from(senders)
				.leftJoin(messages, eq(senders.id, messages.senderId))
				.where(eq(senders.email, input.email))
				.groupBy(senders.id)
		)[0]

		console.log(sender)

		if (!sender) {
			let { success } = await ratelimit_3_per_1_day.limit(
				`${ipv6}+${input.email}`,
			)
			if (!success) {
				throw new TRPCError({
					code: "FORBIDDEN",
					message: "You have sent too many messages, please try again later.",
				})
			}

			try {
				await sendEmail({
					senderName: input.name,
					email: input.email,
					subject: "Thanks you for reaching out!",
				})
			} catch (error) {
				throw new TRPCError({
					code: "INTERNAL_SERVER_ERROR",
					message: "Internal server error, please try again later.",
				})
			}

			// await 300ms
			await new Promise((resolve) => setTimeout(resolve, 300))

			try {
				await checkIfTheSenderEmailIsNotValid()
			} catch (error) {
				throw new TRPCError({
					code: "BAD_REQUEST",
					message: "Please provide a working email address",
				})
			}

			let newSender = (
				await ctx.db
					.insert(senders)
					.values({
						name: input.name,
						email: input.email,
					})
					.returning({ id: senders.id })
			)[0]
			console.log(
				"\x1b[1;32m%s\x1b[1;36m",
				`Sender Created successfully with id: ${newSender?.id}`,
			)

			sender = { id: newSender?.id!, messageCount: 0 }
		}

		// - this is a life time rate limit, for which I'm using the main db to get the count of messages sent by specific email, unlike other temporary rate limits, for which I'm using upstash
		if (sender.messageCount >= MAX_NUMBER_OF_MESSAGES_PER_EMAIL) {
			console.log(
				"\x1b[1;33m%s\x1b[1;36m",
				"Email exceeded the limit of messages",
			)
			throw new TRPCError({
				code: "FORBIDDEN",
				message: "You have sent too many messages",
			})
		}

		let { success: success_2 } = await ratelimit_3_per_1_H.limit(input.email)
		if (!success_2) {
			throw new TRPCError({
				code: "FORBIDDEN",
				message: "You have sent too many messages, please try again later.",
			})
		}

		try {
			await sendEmailToMe({
				senderName: input.name,
				email: input.email,
				message: input.message,
			})
		} catch (error) {
			console.error(error)
			throw new TRPCError({
				code: "INTERNAL_SERVER_ERROR",
				message: "An error occurred while sending the message",
			})
		}

		let message = await ctx.db
			.insert(messages)
			.values({
				message: input.message,
				senderId: sender.id,
			})
			.returning({ id: messages.id })
		console.log(
			"\x1b[1;32m%s\x1b[1;36m",
			`Message Created successfully with id: ${message[0]?.id}`,
		)
	} catch (error) {
		if (error instanceof TRPCError) throw error

		console.log(error)
		throw new TRPCError({
			code: "INTERNAL_SERVER_ERROR",
			message: "An error occurred while sending the message",
		})
	}
}

/*
  , rate limit the db email check with 'ip' to 10 per 10 minutes
  - db check by email
    -- if not exists, 
    , rate limit thanks email sending with "ip+email" to 3 per day
      : send thanks email
        -- if failed,
          \ throw error 'Please provide a working email address'
        -- if success,
          > insert sender into db
          , rate limit message sending with "email" to 2 per 1 hour
          > insert message into db
          : send the message to my email
          \ return success message
    -- if exists,
      -- if has sent more than 10 messages in total
        \ throw error 'You have sent too many messages'
      -- if has sent less than 10 messages in total
        , rate limit message sending with "email" to 3 per 1 hour
        > insert message into db
        : send the message to my email
        \ return success message

*/
