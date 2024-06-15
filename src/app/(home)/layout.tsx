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
		<div className="mx-auto max-w-7xl pt-2">
			<TRPCReactProvider>
				<div className="fixed inset-x-0 top-2 z-10 w-full bg-background">
					<Navbar />
				</div>
				<div className="pt-14">{children}</div>
			</TRPCReactProvider>
		</div>
	)
}
