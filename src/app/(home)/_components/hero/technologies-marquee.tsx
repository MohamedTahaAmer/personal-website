import TechIcons from "./tech-icons"
const TechnologiesMarquee = () => {
	return (
		<div className="mt-20 overflow-hidden">
			<div className="marquee bg-primary">
				<div className="marquee-content">
					<TechIcons />
				</div>
			</div>
		</div>
	)
}

export default TechnologiesMarquee
