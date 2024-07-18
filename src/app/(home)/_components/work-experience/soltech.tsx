import Image from "next/image"
import Wave from "./wave"

const Soltech = () => {
	let techCss = "rounded-lg bg-secondary-foreground/80 px-2 text-background"
	let boldTextCss = "font-bold text-secondary-foreground/80"
	return (
		<div className="relative overflow-hidden border-b pt-24 shadow-lg">
			<div className="relative z-10 mx-auto grid max-w-7xl grid-cols-3 grid-rows-1 gap-y-8 px-8 max-lg:grid-cols-1 max-sm:p-2 max-sm:pl-4">
				<div className="_title col-span-1 flex h-fit flex-col items-center">
					<a href="https://www.linkedin.com/company/soltech-inc/">
						<div className="relative mb-2 aspect-square w-24 overflow-hidden rounded-full">
							<Image sizes="96px" fill className="object-cover" alt="AnyTime Software Logo" src="/companies/soltech.jpeg" />
						</div>
					</a>
					<div className="text-3xl font-bold text-secondary">Soltech </div>
					<div className="text-xl font-bold text-secondary-foreground/80">May 2023 - April 2024</div>
				</div>
				<div className="col-span-2 text-xl">
					<div className="text-3xl font-bold text-secondary-foreground decoration-secondary/40 underline-offset-4 max-sm:mb-2 max-sm:text-xl max-sm:underline">
						&gt; Full Stack Web Developer
					</div>
					<div className="">
						<span className="font-bold text-secondary">Fields: </span>
						Medical, Legal, and Low Enforcement Software Development.
					</div>
					<div className="">
						<div className="font-bold text-secondary">Technologies:</div>
						<div className="my-2 flex flex-wrap gap-1 whitespace-nowrap pl-12 text-base font-bold max-sm:pl-6">
							<div className={techCss}>TypeScript</div>
							<div className={techCss}>JavaScript</div>
							<div className={techCss}>Python</div>
							<div className={techCss}>Django</div>
							<div className={techCss}>HTML</div>
							<div className={techCss}>CSS</div>
							<div className={techCss}>Next.JS</div>
							<div className={techCss}>React</div>
							<div className={techCss}>Postgres</div>
							<div className={techCss}>Prisma</div>
							<div className={techCss}>AWS</div>
							<div className={techCss}>EC2</div>
							<div className={techCss}>RDS</div>
							<div className={techCss}>S3</div>
							<div className={techCss}>Shell Scripting</div>
						</div>
					</div>
					<div className="pb-24">
						<div className="font-bold text-secondary">Day-To-Day:</div>
						<ul className="list-disc pl-12 max-sm:pl-6">
							<li className="">
								Played a pivotal role within a team of five members across two concurrent projects, implementing <span className={boldTextCss}>SCRUM</span>{" "}
								methodology through
								<span className={boldTextCss}> JIRA,</span> which led to achieving project completion{" "}
								<span className={boldTextCss}>two weeks ahead of schedule.</span>
							</li>
							<li className="">
								Executed deployment strategies on <span className={boldTextCss}>AWS,</span> leveraging <span className={boldTextCss}>EC2</span> instances for
								hosting, <span className={boldTextCss}>S3</span> for storage, and <span className={boldTextCss}>RDS </span> for database management, ensuring
								seamless integration and optimal performance.
							</li>
							<li className="">
								Orchestrated <span className={boldTextCss}>deployment workflows</span> across three distinct environments{" "}
								<span className={boldTextCss}>(development, quality assurance, and production), </span> integral to maintaining a seamless{" "}
								<span className={boldTextCss}>CI/CD pipeline</span>
							</li>
							<li className="">
								Undertook <span className={boldTextCss}> refactoring and optimization of legacy codebases,</span>
								employing parallel programming techniques to address performance bottlenecks, resulting in a remarkable{" "}
								<span className={boldTextCss}>performance boost of over 50%.</span>
							</li>
							<li className="">
								<span className={boldTextCss}>Designed</span> robust database architectures and executed seamless
								<span className={boldTextCss}> migrations</span> between schemas, ensuring data integrity and compatibility with evolving application
								requirements.
							</li>
						</ul>
					</div>
				</div>
			</div>
			<Wave />
		</div>
	)
}

export default Soltech
