import { useEffect, useState } from "react"
import useDidRender from "./did-render"

// react custom hook to get the screen width
export default function useScreenWidth() {
	let didRender = useDidRender()
	const [width, setWidth] = useState(didRender ? window.innerWidth : 0)

	// - handle client render event
	useEffect(() => {
		if (!didRender) return
		setWidth(window.innerWidth)
	}, [didRender])

	// - handle window resize event
	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth)
		window.addEventListener("resize", handleResize)
		return () => window.removeEventListener("resize", handleResize)
	}, [])
	return width
}
