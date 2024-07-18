"use client"
import useScreenWidth from "@/lib/hooks/get-screen-width"
import Image from "next/image"
import { useEffect, useState } from "react"

const BgImage = () => {
	let screenWidth = useScreenWidth()
	if (!screenWidth || screenWidth < 1536) {
		return null
	}

	return (
		<div className="absolute inset-0 w-full overflow-hidden max-2xl:hidden">
			<Image fill priority={true} sizes="(min-width: 1536px) 100vw" className="object-cover" alt="Mountain Image" src="/hero/hero.png" />
		</div>
	)
}

export default BgImage
