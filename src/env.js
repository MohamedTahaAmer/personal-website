import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

// - I won't work on the edge, and I don't want to re-add the env variable two times each time, one on the server or the client and the other in the runtime object, so I removed the runtime, which through an error, and this command is to suppress that error
// @ts-expect-error
export const env = createEnv({
	server: {
		DATABASE_URL: z.string().url(),
		DATABASE_PREFIX: z.string().url(),
		NODE_ENV: z
			.enum(["development", "test", "production"])
			.default("development"),
	},
})
