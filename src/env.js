import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
	server: {
		DATABASE_URL: z.string().url().min(1),
		DATABASE_PREFIX: z.string().min(1),
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
		NEXT_PUBLIC_CV_LINK: process.env.NEXT_PUBLIC_CV_LINK,
		NODE_ENV: process.env.NODE_ENV,
	},
})
