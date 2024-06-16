import { TRPCReactProvider } from "@/trpc/react"
import Navbar from "./_components/Navbar"

export const metadata = {
	title: "Mohamed Amer",
	description: "Mohamed Amer - Fullstack Developer - Portfolio",
	icons: [{ rel: "icon", url: "/me.ico" }],
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<TRPCReactProvider>
			<Navbar />
			<div className="pt-[90px]">{children}</div>
		</TRPCReactProvider>
	)
}
