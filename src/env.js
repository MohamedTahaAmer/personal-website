import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
	server: {
		DATABASE_URL: z.string().url().min(1),
		DATABASE_PREFIX: z.string().min(1),
		GMAIL_APP_PASSWORD: z.string().min(1),
		SMTP_GMAIL: z.string().email(),
		MY_PERSONAL_GMAIL: z.string().email(),
		UPSTASH_REDIS_REST_URL: z.string().min(1),
		UPSTASH_REDIS_REST_TOKEN: z.string().min(1),
		DELAY_BETWEEN_SMTP_AND_IMAP: z.string().default("2500"),
		NODE_ENV: z
			.enum(["development", "test", "production"])
			.default("development"),
	},

	client: {
		NEXT_PUBLIC_CV_LINK: z.string().url().min(1),
	},

	runtimeEnv: {
		DATABASE_URL: process.env.DATABASE_URL,
		DATABASE_PREFIX: process.env.DATABASE_PREFIX,
		UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
		UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
		GMAIL_APP_PASSWORD: process.env.GMAIL_APP_PASSWORD,
		SMTP_GMAIL: process.env.SMTP_GMAIL,
		MY_PERSONAL_GMAIL: process.env.MY_PERSONAL_GMAIL,
		DELAY_BETWEEN_SMTP_AND_IMAP: process.env.DELAY_BETWEEN_SMTP_AND_IMAP,
		NEXT_PUBLIC_CV_LINK: process.env.NEXT_PUBLIC_CV_LINK,
		NODE_ENV: process.env.NODE_ENV,
	},
})
