await import("./src/env.js")
/** @type {import('next').NextConfig} */
const config = {
	images: {
		// domains: ["utfs.io"],
	},
	experimental: {
		typedRoutes: true,
	},
}

export default config
