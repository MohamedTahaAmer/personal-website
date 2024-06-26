import TantaUniversity from "./tanta-university"

const Education = () => {
	return (
		<div className=" pt-40 max-md:pt-4 " id="education">
			<div className="relative">
				<div className="relative z-10 mx-auto w-fit bg-background px-4">
					<div className="gradient-text mb-8 text-center text-5xl font-bold uppercase tracking-widest max-sm:text-3xl">education</div>
				</div>
				<div className="absolute inset-x-0 top-1/2 z-0 grow border-t border-lime-400"></div>
			</div>
			<TantaUniversity />
		</div>
	)
}

export default Education
