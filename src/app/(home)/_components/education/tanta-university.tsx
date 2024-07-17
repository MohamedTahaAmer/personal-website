import Image from "next/image"

const TantaUniversity = () => {
	let boldTextCss = "font-bold text-secondary-foreground/80"

	return (
		<div className="relative overflow-hidden border-b pt-24 shadow-lg max-md:pt-4">
			<div className="relative z-10 mx-auto grid max-w-7xl grid-cols-3 grid-rows-1 gap-y-8 px-8 max-lg:grid-cols-1 max-sm:p-2 max-sm:pl-4">
				<div className="_title col-span-1 flex h-fit flex-col items-center">
					<a href="https://eng.tanta.edu.eg/en/">
						<div className="relative mb-2 aspect-square w-24 overflow-hidden rounded-full">
							<Image
								sizes="96px"
								fill
								className="object-cover"
								alt="AnyTime Software Logo"
								src="/companies/tanta.png"
							/>
						</div>
					</a>
					<div className="text-3xl font-bold text-secondary">Tanta University</div>
					<div className="text-xl font-bold text-secondary-foreground/80">September 2018 - July 2023</div>
				</div>
				<div className="col-span-2 text-xl">
					<div className="text-2xl font-bold text-secondary-foreground decoration-secondary/40 underline-offset-4 max-sm:mb-2 max-sm:underline">
						&gt; Bachelor degree in Electrical Engineering and Automation Control.
					</div>
					<div className="pb-24">
						<ul className="list-disc pl-12 max-sm:pl-6">
							<li className="">
								<span className={boldTextCss}> Ranked 5th in my class.</span>
							</li>
							<li className="">
								<span className={boldTextCss}>Led a team of 12 members</span> during the graduation project, where I
								managed task assignments and deadlines, resulting in the{" "}
								<span className={boldTextCss}>successful completion of the project with excellence.</span>
							</li>
							<li className="">
								Served as the{" "}
								<span className={boldTextCss}>representative for my section of 40 colleagues for three years,</span>{" "}
								facilitating communication and coordination between professors, teaching assistants, and students,
								ensuring smooth operations within the academic environment.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TantaUniversity
