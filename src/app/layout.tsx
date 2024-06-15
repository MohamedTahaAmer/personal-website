import "~/styles/globals.css"
import { Inter } from "next/font/google"

import { TRPCReactProvider } from "~/trpc/react"

export const metadata = {
	title: "Mohamed Amer",
	description: "Mohamed Amer - Fullstack Developer - Portfolio",
	icons: [{ rel: "icon", url: "/me.ico" }],
}
const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<TRPCReactProvider>{children}</TRPCReactProvider>
			</body>
		</html>
	)
}
