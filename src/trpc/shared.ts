import { type inferRouterInputs, type inferRouterOutputs } from "@trpc/server"
import superjson from "superjson"

import { type AppRouter } from "@/server/api/root"

export const transformer = superjson

function getBaseUrl() {
	// if you are running tests, use the localhost,
	// this has to be above the browser check, as the test will be simulating a browser and we don't want to return the current origin instead we want to return localhost
	if (process.env.TEST) return `http://localhost:${process.env.PORT ?? 3000}`

	// if you are running in the browser, use the current origin
	if (typeof window !== "undefined") return ""

	// if you are running on Vercel, use the Vercel URL
	if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`

	// else return localhost
	return `http://localhost:${process.env.PORT ?? 3000}`
}

export function getUrl() {
	return getBaseUrl() + "/api/trpc"
}

/**
 * Inference helper for inputs.
 *
 * @example type HelloInput = RouterInputs['example']['hello']
 */
export type RouterInputs = inferRouterInputs<AppRouter>

/**
 * Inference helper for outputs.
 *
 * @example type HelloOutput = RouterOutputs['example']['hello']
 */
export type RouterOutputs = inferRouterOutputs<AppRouter>
