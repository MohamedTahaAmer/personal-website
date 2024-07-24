import { cn } from "@/lib/utils"
import Link from "next/link"
import type { UrlObject } from "url"

interface NavigationLinksProps {
	className: string
}

export let navLinks = [
	{ name: "Home", href: "/#hero" },
	{ name: "Work", href: "/#work" },
	{ name: "Projects", href: "/#projects" },
	{ name: "Blog", href: "/#blog" },
	{ name: "Education", href: "/#education" },
	{ name: "Contact Me", href: "/#contact-me" },
]
export let hiddenLinks = ["Projects", "Blog"]

const NavigationLinks = ({ className }: NavigationLinksProps) => {
	return (
		<div className={cn(className, "")}>
			{navLinks.map((navLink, index) => (
				<Link key={index} href={navLink.href as unknown as UrlObject} className={cn("p-2", hiddenLinks.includes(navLink.name) && "hidden")}>
					<div className="group/link relative font-bold tracking-widest text-secondary">
						{navLink.name}
						<span className="absolute bottom-0 left-0 block h-[2px] w-0 bg-secondary-foreground duration-500 group-hover/link:w-full"></span>
					</div>
				</Link>
			))}
		</div>
	)
}

export default NavigationLinks
