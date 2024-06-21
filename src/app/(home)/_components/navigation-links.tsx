import { cn } from "@/lib/utils"
import Link from "next/link"

interface NavigationLinksProps {
	className: string
}

const NavigationLinks = ({ className }: NavigationLinksProps) => {
	return (
		<div className={cn(className, "")}>
			<Link href="/#hero" className="p-2">
				<div className="group/link relative font-bold  text-secondary ">
					Home
					<span className="absolute bottom-0 left-0 block h-[2px] w-0  bg-secondary-foreground duration-500 group-hover/link:w-full "></span>
				</div>
			</Link>
			<Link href="/#work" className="p-2">
				<div className="group/link relative font-bold  text-secondary ">
					Work
					<span className="absolute bottom-0 left-0 block h-[2px] w-0  bg-secondary-foreground duration-500 group-hover/link:w-full "></span>
				</div>
			</Link>
			<Link href="/#projects" className="hidden p-2">
				<div className="group/link relative font-bold  text-secondary ">
					Projects
					<span className="absolute bottom-0 left-0 block h-[2px] w-0  bg-secondary-foreground duration-500 group-hover/link:w-full "></span>
				</div>
			</Link>
			<Link href="/#blog" className="hidden p-2">
				<div className="group/link relative font-bold  text-secondary ">
					Blog
					<span className="absolute bottom-0 left-0 block h-[2px] w-0  bg-secondary-foreground duration-500 group-hover/link:w-full "></span>
				</div>
			</Link>
			<Link href="/#education	" className="p-2">
				<div className="group/link relative font-bold  text-secondary ">
					Education
					<span className="absolute bottom-0 left-0 block h-[2px] w-0  bg-secondary-foreground duration-500 group-hover/link:w-full "></span>
				</div>
			</Link>
			<Link href="/#contact-me" className="p-2">
				<div className="group/link relative font-bold  text-secondary ">
					Contact Me
					<span className="absolute bottom-0 left-0 block h-[2px] w-0  bg-secondary-foreground duration-500 group-hover/link:w-full "></span>
				</div>
			</Link>
		</div>
	)
}

export default NavigationLinks
