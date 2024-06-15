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

	runtimeEnv: {
		DATABASE_URL: process.env.DATABASE_URL,
		DATABASE_PREFIX: process.env.DATABASE_PREFIX,
		NODE_ENV: process.env.NODE_ENV,
	},
})
