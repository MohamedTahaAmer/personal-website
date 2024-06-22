import { env } from "@/env"
import { ImapFlow } from "imapflow"
const client = new ImapFlow({
	host: "smtp.gmail.com",
	port: 993,
	secure: true,
	emitLogs: false,
	auth: {
		user: env.SMTP_GMAIL,
		pass: env.GMAIL_APP_PASSWORD,
	},
})

export const checkIfTheSenderEmailIsNotValid = async () => {
	// Wait until client connects and authorizes
	await client.connect()

	// Select and lock a mailbox. Throws if mailbox does not exist
	let lock = await client.getMailboxLock("INBOX")

	try {
		4
		// fetch latest message source
		// client.mailbox includes information about currently selected mailbox
		if (typeof client.mailbox !== "object") {
			throw new Error("Can't access the mailbox of this email")
		}

		let message = await client.fetchOne(`*`, { envelope: true })

		console.log("\x1b[1;32m%s\x1b[1;36m", message.envelope.subject)

		if (message.envelope.subject === "Delivery Status Notification (Failure)") {
			throw new Error("Email not found")
		}
	} catch (e) {
		console.error(e)
		lock.release()
		throw new Error("Faild to fetch the mailbox")
	} finally {
		// Make sure lock is released, otherwise next `getMailboxLock()` never returns
		lock.release()
	}

	// log out and close connection
	await client.logout()
}
