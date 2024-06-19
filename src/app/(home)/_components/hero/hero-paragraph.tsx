const HeroParagraph = () => {
	return (
		<ul className="max-w-xl text-xl leading-relaxed">
			<li className="">
				I focus on{" "}
				<span className="font-bold text-secondary-foreground">performance</span>{" "}
				and{" "}
				<span className="font-bold text-secondary-foreground">
					accessablity
				</span>{" "}
				to create the best user experience.
			</li>
			<li className="">
				<span className="block p-2"></span>I am a pro{" "}
				<span className="font-bold text-secondary">Full-Stack type safety</span>
				{", "}
				<br />
				and I always start my projects with TypeScript and{" "}
				<span className="font-bold text-secondary">tRPC</span> whenever
				possible.
			</li>
			<li className="max-sm:hidden">
				<span className="block p-2 "></span>
				Finally, I have the ability to learn and be productive with new
				technologis in a very short time, and I&apos;m allways{" "}
				<span className="font-bold underline decoration-secondary underline-offset-4">
					open for learning whatever tool
				</span>{" "}
				needed for the job.
			</li>
		</ul>
	)
}

export default HeroParagraph
