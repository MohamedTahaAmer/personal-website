"use client"
import { useEffect, useRef } from "react"
import { Logo } from "./Logo"
import MobileNavigation from "./mobile-navigation"
import NavigationLinks from "./navigation-links"
import "./navbar.css"

const Navbar = () => {
	let navref = useRef<HTMLDivElement>(null)
	useEffect(() => {
		if (!navref.current) return
		// JavaScript to handle navbar visibility on scroll
		let lastScrollY = window.scrollY
		const navbar = navref.current

		window.addEventListener("scroll", () => {
			if (window.innerWidth > 640) return
			if (window.scrollY > lastScrollY) {
				// Scrolling down
				navbar.classList.remove("visible-nav")
				navbar.classList.add("hidden-nav")
			} else {
				// Scrolling up
				navbar.classList.remove("hidden-nav")
				navbar.classList.add("visible-nav")
			}
			lastScrollY = window.scrollY
		})
	}, [])
	return (
		<div ref={navref} className="fixed inset-x-0 top-0 z-30 flex w-full justify-center border-b bg-background/70 p-4 shadow-lg backdrop-blur-sm">
			<div className="w-full max-w-7xl">
				<div className="flex h-14 w-full items-center justify-between px-6 max-sm:px-2">
					<Logo />
					{/* full screen navigation links */}
					<NavigationLinks className="flex max-md:hidden" />

					{/* mobile navigation links */}
					<div className="hidden max-md:block">
						<MobileNavigation />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
