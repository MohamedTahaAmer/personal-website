import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

const Hero = () => {
	return (
		<div className="relative w-fit pb-16">
			<div className=" mt-24 p-4 text-left">
				<h1 className="text-4xl font-bold leading-tight">
					I&apos;m a{" "}
					<span className="gradient-text text-5xl font-bold">
						Full-Stack Web Developer
					</span>{" "}
					<br />
					with more than two years of experience.
				</h1>
				<div className="ml-16">
					<p className="mt-4 max-w-xl text-xl leading-relaxed">
						I focus on{" "}
						<span className="font-bold text-secondary-foreground">
							performance
						</span>{" "}
						and{" "}
						<span className="font-bold text-secondary-foreground">
							accessablity
						</span>{" "}
						to create the best user experience.
						<span className="block p-2"></span>I am a pro{" "}
						<span className="font-bold text-secondary">
							Full-Stack type safety
						</span>
						{", "}
						<br />
						and I always start my projects with TypeScript and{" "}
						<span className="font-bold text-secondary">tRPC</span> whenever
						possible.
						<span className="block p-2"></span>
						Finally, I have the ability to learn and be productive with new
						technologis in a very short time, and I&apos;m allways{" "}
						<span className="font-bold underline decoration-secondary underline-offset-4">
							open for learning whatever tool
						</span>{" "}
						needed for the job.
					</p>
				</div>
				<div className="absolute bottom-0 right-0 flex gap-4">
					<Link
						className={cn(
							buttonVariants(),
							"group/link relative z-20 bg-secondary px-10 text-2xl font-bold transition-all duration-500 hover:scale-110 hover:bg-transparent",
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
							"group/link relative z-20 bg-secondary-foreground px-10 text-2xl font-bold transition-all duration-500 hover:scale-110 hover:bg-transparent",
						)}
						href="https://utfs.io/f/85011049-2add-436e-9853-d1e9fecd1dc5-x8dvjg.pdf"
						target="_blank"
					>
						<span className="absolute left-0 top-0 z-10 block h-full w-0 rounded-lg bg-secondary transition-all duration-500 group-hover/link:w-full"></span>
						<div className=" z-20 bg-transparent">Show CV</div>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Hero
