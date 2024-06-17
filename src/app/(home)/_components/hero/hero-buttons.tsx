import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Download, Linkedin } from "lucide-react"
import Link from "next/link"

const HeroButtons = () => {
	return (
		<>
			<Link
				className={cn(
					buttonVariants(),
					"group/link relative z-20 bg-secondary px-10 text-2xl font-bold transition-all duration-500 hover:scale-110 hover:bg-transparent max-sm:px-4",
				)}
				href="https://www.linkedin.com/in/mohamed-amer-66bb001b0/"
				target="_blank"
			>
				<div className=" z-20 bg-transparent pr-2 max-sm:text-lg">LinkedIn</div>

				<Linkedin className="z-20 size-5 text-background max-sm:hidden " />

				<span className="absolute left-0 top-0 z-10 block h-full w-0 rounded-lg bg-secondary-foreground/80 transition-all duration-500 group-hover/link:w-full"></span>
			</Link>
			<Link
				className={cn(
					buttonVariants(),
					"group/link relative z-20 bg-secondary-foreground px-10 text-2xl font-bold transition-all duration-500 hover:scale-110 hover:bg-transparent max-sm:px-4",
				)}
				href="https://utfs.io/f/85011049-2add-436e-9853-d1e9fecd1dc5-x8dvjg.pdf"
				target="_blank"
			>
				<div className="z-20 bg-transparent pr-2 max-sm:text-lg">Show CV</div>
				<Download className="z-20 size-5 text-background max-sm:hidden" />
				<span className="absolute left-0 top-0 z-10 block h-full w-0 rounded-lg bg-secondary/80 transition-all duration-500 group-hover/link:w-full"></span>
			</Link>
		</>
	)
}

export default HeroButtons
