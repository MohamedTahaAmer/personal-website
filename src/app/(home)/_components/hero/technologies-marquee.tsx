import TechnologiesIcnos from "./technologies-icnos"
const TechnologiesMarquee = () => {
	return (
		<div className="mt-20 overflow-hidden">
			<div className="marquee bg-primary ">
				<div className="marquee-content">
					<TechnologiesIcnos />
				</div>
			</div>
		</div>
	)
}

export default TechnologiesMarquee
