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
		console.log(info)
	} catch (error) {
		console.error(error)
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
		to: myGmail,
		subject: `Personal Website - New message from ${sendEmailToMe.senderName}`,
		text: `${sendEmailToMe.message}\n\nSent by: ${sendEmailToMe.email}`,
	}

	try {
		const info = await transporter.sendMail(mailOptions)
		console.log(info)
	} catch (error) {
		console.error(error)
	}
}
