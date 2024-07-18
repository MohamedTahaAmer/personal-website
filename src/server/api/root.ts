import { createTRPCRouter } from "@/server/api/trpc"
import { contactMeRouter } from "./routers/contact-me/_route"
import { testTest } from "./routers/test/_route"

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
	contactMe: contactMeRouter,
	test: testTest,
})

// export type definition of API
export type AppRouter = typeof appRouter
