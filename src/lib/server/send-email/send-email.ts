import { env } from "@/env"
import nodemailer from "nodemailer"
import { createTheHTML } from "./create-the-html"

let myGmail = env.SMTP_GMAIL
let senderPassword = env.GMAIL_APP_PASSWORD

const transporter = nodemailer.createTransport({
	service: "gmail",
	host: "smtp.gmail.com",
	port: 586,
	secure: false, // true for 465, false for other ports
	auth: {
		user: myGmail, // generated ethereal user
		pass: senderPassword, // generated ethereal password
	},
})

type SendEmailPayload = {
	senderName: string
	email: string
	subject: string
}
export const sendEmail = async (sendEmailPayload: SendEmailPayload) => {
	let mailOptions = {
		from: {
			name: "Mohamed Amer",
			address: myGmail,
		},
		to: [sendEmailPayload.email],
		subject: sendEmailPayload.subject,
		html: createTheHTML(sendEmailPayload.senderName),
	}

	try {
		const info = await transporter.sendMail(mailOptions)
		console.log("\x1b[1;32m%s\x1b[1;36m", `Thanks Email sent to: ${info.envelope.to[0]}`)
		return info.messageId
	} catch (error) {
		console.log("\x1b[1;31m%s\x1b[1;36m", "Failed to send email through SMTP")
		throw new Error("Failed to send email through SMTP")
	}
}

type SendEmailToMe = {
	senderName: string
	email: string
	message: string
}
export const sendEmailToMe = async (sendEmailToMe: SendEmailToMe) => {
	let mailOptions = {
		from: {
			name: sendEmailToMe.senderName,
			address: myGmail,
		},
		to: env.MY_PERSONAL_GMAIL,
		subject: `Personal Website - New message from ${sendEmailToMe.senderName}`,
		text: `${sendEmailToMe.message}\n\nSent by: ${sendEmailToMe.email}`,
	}

	try {
		await transporter.sendMail(mailOptions)
		console.log("\x1b[1;32m%s\x1b[1;36m", `Email sent to me with message from ${sendEmailToMe.email}`)
	} catch (error) {
		console.log("\x1b[1;31m%s\x1b[1;36m", "Failed to send email through SMTP")
		throw new Error("Failed to send email through SMTP")
	}
}
