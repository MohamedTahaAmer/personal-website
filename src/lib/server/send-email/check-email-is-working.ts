import { env } from "@/env"
import { ERROR_EMAIL_NOT_WORKING } from "@/lib/constants"
import { ImapFlow } from "imapflow"
import type { ImapFlow as ImapFlowType } from "imapflow"

export const checkIfTheSenderEmailIsNotValid = async (messageId: string) => {
	const client: ImapFlowType = new ImapFlow({
		host: "smtp.gmail.com",
		port: 993,
		secure: true,
		logger: false,
		auth: {
			user: env.SMTP_GMAIL,
			pass: env.GMAIL_APP_PASSWORD,
		},
	})

	await client.connect()

	let lock = await client.getMailboxLock("INBOX")

	try {
		if (typeof client.mailbox !== "object") {
			console.log(
				"\x1b[1;31m%s\x1b[1;36m",
				"Can't access the mailbox of this email",
			)
			throw new Error("Can't access the mailbox of this email")
		}

		let message = await client.fetchOne(`*`, {
			envelope: true,
		})
		if (message.envelope.inReplyTo === messageId) {
			console.log("\x1b[1;31m%s\x1b[1;36m", ERROR_EMAIL_NOT_WORKING)
			throw new Error(ERROR_EMAIL_NOT_WORKING)
		}
	} finally {
		lock.release()
		await client.logout()
		console.log(
			"\x1b[1;33m%s\x1b[1;36m",
			"Released the IMAP lock and logged out",
		)
	}
}
