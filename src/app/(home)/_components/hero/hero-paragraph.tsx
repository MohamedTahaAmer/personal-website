const HeroParagraph = () => {
	let x = "this is me typing and monitoring the cpu usage of github copilot and the cspell extension being working in the same time and catching errors"
	return (
		<ul className="max-w-xl text-xl leading-relaxed">
			<li className="">
				I focus on <span className="font-bold text-secondary-foreground">performance</span> and <span className="font-bold text-secondary-foreground">accessibility</span> to create the best user experience.
			</li>
			<li className="pt-4">
				Worked across all layers <br />
				of building <span className="font-bold text-secondary">scalable full stack applications,</span> from <span className="font-bold text-secondary">front-end</span> to <span className="font-bold text-secondary">back-end</span> and <span className="font-bold text-secondary">deployment.</span>
			</li>
			<li className="pt-4 max-sm:hidden">
				Experienced in the complete software development <br />
				life cycle, including{" "}
				<span className="font-bold text-secondary">
					Development, CI/CD, <br />
					Testing, Documentation, Monitoring
				</span>
				<br />
				and <span className="font-bold text-secondary">Analytics Collection.</span>
			</li>
			{/* <li className="">
				I am a pro <span className="font-bold text-secondary">Full-Stack type safety</span>
				{", "}
				<br />
				and I always start my projects with TypeScript and <span className="font-bold text-secondary">tRPC</span> whenever possible.
			</li> */}
			{/* <li className="pt-4 max-sm:hidden">
				Finally, I have the ability to learn and be productive with new technologies in a very short time, and I&apos;m always <span className="font-bold underline decoration-secondary underline-offset-4">open for learning whatever tool</span> needed for the job.
			</li> */}
		</ul>
	)
}

export default HeroParagraph
