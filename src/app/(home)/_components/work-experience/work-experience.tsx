import AnyTimeSoftware from "./anytime-software"

const WorkExperience = () => {
	return (
		<>
			<div className=" mt-40 ">
				<div className="relative">
					<div className="relative z-10 mx-auto w-fit bg-background px-4">
						<div className="gradient-text mb-8  text-center text-5xl font-bold uppercase tracking-widest">
							work experience
						</div>
					</div>
					<div className="absolute inset-x-0 top-1/2 z-0 grow border-t border-lime-400"></div>
				</div>
				<AnyTimeSoftware />
				<AnyTimeSoftware />
			</div>
		</>
	)
}

export default WorkExperience
