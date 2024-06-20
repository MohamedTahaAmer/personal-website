import { z } from "zod"

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc"
import { TRPCError } from "@trpc/server"
import { count, eq, sql } from "drizzle-orm"
import { schema } from "@/server/db"

export const contactMeRouter = createTRPCRouter({
	sendMessage: publicProcedure
		.input(
			z.object({
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
			}),
		)
		.output(z.undefined())
		.mutation(async ({ ctx, input }) => {
			try {
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

				if (sender.messageCount >= 5) {
					console.log(sender.messageCount)
					throw new TRPCError({
						code: "FORBIDDEN",
						message: "You have sent too many messages",
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
		}),
})
