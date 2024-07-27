const HeroParagraph = () => {
	let x = "this is me typing and monitoring the cpu usage of github copilot and the cspell extension being working in the same time and catching errors"
	return (
		<ul className="max-w-xl text-xl leading-relaxed">
			<li className="">
				Worked across <span className="font-bold text-secondary">all layers</span> of modern web development ranging from{" "}
				<span className="font-bold text-secondary">building user interfaces</span> to <span className="font-bold text-secondary">backend development </span> and{" "}
				<span className="font-bold text-secondary">creating CI/CD pipelines.</span>
			</li>
			<li className="mt-4">
				I focus on <span className="font-bold text-secondary-foreground">performance</span> and{" "}
				<span className="font-bold text-secondary-foreground">accessibility</span> to create the best user experience.
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
		</ul>
	)
}

export default HeroParagraph
