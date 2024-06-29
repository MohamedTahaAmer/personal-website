import { useEffect, useState } from "react"

export default function useDidRender() {
	const [didRender, setDidRender] = useState(false)
	useEffect(() => {
		setDidRender(true)
	}, [])
	return didRender
}
