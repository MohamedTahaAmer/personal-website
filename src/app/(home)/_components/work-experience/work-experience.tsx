import AnyTimeSoftware from "./anytime-software"
import Soltech from "./soltech"
import Upwork from "./upwork"

const WorkExperience = () => {
	return (
		<div className="pt-8 sm:pt-40" id="work">
			<div className="relative">
				<div className="relative z-10 mx-auto w-fit bg-background px-4">
					<div className="gradient-text mb-8 text-center text-5xl font-bold uppercase tracking-widest max-sm:text-3xl">experience</div>
				</div>
				<div className="absolute inset-x-0 top-1/2 z-0 grow border-t border-lime-400"></div>
			</div>
			<AnyTimeSoftware />
			<Soltech />
			<Upwork />
		</div>
	)
}

export default WorkExperience
