import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
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
				<span className="absolute left-0 top-0 z-10 block h-full w-0 rounded-lg bg-secondary-foreground transition-all duration-500 group-hover/link:w-full"></span>
				<div className=" z-20 bg-transparent">LinkedIn</div>
			</Link>
			<Link
				className={cn(
					buttonVariants(),
					"group/link relative z-20 bg-secondary-foreground px-10 text-2xl font-bold transition-all duration-500 hover:scale-110 hover:bg-transparent max-sm:px-4",
				)}
				href="https://utfs.io/f/85011049-2add-436e-9853-d1e9fecd1dc5-x8dvjg.pdf"
				target="_blank"
			>
				<span className="absolute left-0 top-0 z-10 block h-full w-0 rounded-lg bg-secondary transition-all duration-500 group-hover/link:w-full"></span>
				<div className=" z-20 bg-transparent">Show CV</div>
			</Link>
		</>
	)
}

export default HeroButtons
