import "@/styles/globals.css"
import MyToast from "@/components/my-toast"
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
			<div className="pt-[90px]" id="hero">
				{children}
			</div>
			<MyToast />
		</TRPCReactProvider>
	)
}
