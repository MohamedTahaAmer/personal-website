"use client"
import { useEffect, useState } from "react"
import { Toaster } from "./ui/sonner"

const MyToast = () => {
	const [windowWidth, setWindowWidth] = useState(0)

	useEffect(() => {
		setWindowWidth(window.innerWidth)
		const handleResize = () => {
			setWindowWidth(window.innerWidth)
		}
		window.addEventListener("resize", handleResize)

		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [])

	return (
		<Toaster
			position={windowWidth > 768 ? "bottom-left" : "top-center"}
			richColors={true}
			closeButton={true}
			// toastOptions={{
			// 	className:
			// 		"group-[.toaster]:text-lg  group-[.toaster]:text-background ",
			// 	classNames: {
			// 		success: "group-[.toaster]:bg-secondary/80 font-bold",
			// 		error: "group-[.toaster]:bg-red-500/80",
			// 		closeButton:
			// 			"group-[.toaster]:text-background group-[.toaster]:bg-red-500 border-secondary-foreground",
			// 	},
			// }}
		/>
	)
}

export default MyToast
