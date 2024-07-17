import { SheetClose } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { hiddenLinks, navLinks } from "./navigation-links"
import type { UrlObject } from "url"

interface NavigationLinksProps {
	className: string
}

const MobileNavigationLinks = ({ className }: NavigationLinksProps) => {
	return (
		<div className={cn(className, "")}>
			{navLinks.map((navLink, index) => (
				<SheetClose key={navLink.name} asChild>
					<Link
						key={index}
						href={navLink.href as unknown as UrlObject}
						className={cn("p-2", hiddenLinks.includes(navLink.name) && "hidden")}
					>
						<div className="group/link relative font-bold tracking-widest text-secondary">
							{navLink.name}
							<span className="absolute bottom-0 left-0 block h-[2px] w-0 bg-secondary-foreground duration-500 group-hover/link:w-full"></span>
						</div>
					</Link>
				</SheetClose>
			))}
		</div>
	)
}

export default MobileNavigationLinks
