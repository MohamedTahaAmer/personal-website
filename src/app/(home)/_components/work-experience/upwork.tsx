import Image from "next/image"
import Wave from "./wave"

const Upwork = () => {
	let techCss = "rounded-lg bg-secondary-foreground/80 px-2 text-background"
	let boldTextCss = "font-bold text-secondary-foreground/80"
	return (
		<div className="relative mt-12 overflow-hidden border-b pt-12 shadow-lg ">
			<div className=" relative z-10 mx-auto  grid max-w-7xl grid-cols-3 grid-rows-1 gap-y-8 px-8 max-lg:grid-cols-1 max-sm:p-2  max-sm:pl-4">
				<div className="_title col-span-1 flex h-fit flex-col items-center">
					<a href="https://www.linkedin.com/company/upwork/">
						<div className="relative mb-2 aspect-square w-24 overflow-hidden rounded-full">
							<Image
								fill
								className="object-cover"
								alt="AnyTime Software Logo"
								src="/companies/upwork.jpeg"
							/>
						</div>
					</a>
					<div className="text-3xl font-bold text-secondary">Upwork </div>
					<div className="text-xl font-bold text-secondary-foreground/80">
						March 2021 - Present
					</div>
				</div>
				<div className="col-span-2 text-xl">
					<div className=" text-3xl font-bold text-secondary-foreground decoration-secondary/40 underline-offset-4 max-sm:mb-2 max-sm:text-2xl max-sm:underline">
						&gt; Full Stack Web Developer
					</div>
					<div className="">
						<div className="font-bold text-secondary">Technologies:</div>
						<div className="my-2 flex flex-wrap gap-1 whitespace-nowrap  pl-12 text-base font-bold max-sm:pl-6">
							<div className={techCss}>TypeScript</div>
							<div className={techCss}>JavaScript</div>
							<div className={techCss}>React</div>
							<div className={techCss}>Vite</div>
							<div className={techCss}>Next.JS</div>
							<div className={techCss}>T3 stack</div>
							<div className={techCss}>Shadcn-UI</div>
							<div className={techCss}>Node.JS</div>
							<div className={techCss}>Express.JS</div>
							<div className={techCss}>HTML</div>
							<div className={techCss}>CSS</div>
							<div className={techCss}>Tailwind</div>
							<div className={techCss}>Postgres</div>
							<div className={techCss}>Mysql</div>
							<div className={techCss}>Drizzle ORM</div>
						</div>
					</div>
					<div className="pb-24">
						<div className=" font-bold text-secondary">Day-To-Day:</div>
						<ul className="list-disc pl-12 max-sm:pl-6">
							<li className="">
								Implemented new React features including{" "}
								<span className={boldTextCss}>Server Components </span> and
								<span className={boldTextCss}> Server Actions, </span>
								demonstrating proficiency in cutting-edge paradigms of user
								interface rendering such as Server-Side Rendering{" "}
								<span className={boldTextCss}>(SSR),</span> Server-Side
								Generation <span className={boldTextCss}>(SSG), </span>
								Client-Side Rendering{" "}
								<span className={boldTextCss}>(CSR),</span> Partial
								Pre-Rendering <span className={boldTextCss}>(PPR),</span> and{" "}
								<span className={boldTextCss}>on-demand revalidation.</span>
							</li>
							<li className="">
								Acquired an in-depth understanding of{" "}
								<span className={boldTextCss}>Next.js caching layers,</span> by
								caching static content on{" "}
								<span className={boldTextCss}>Vercel CDN </span>Network then
								trigger on demand revalidation. This{" "}
								<span className={boldTextCss}>reduced operational costs </span>
								and led to markedly{" "}
								<span className={boldTextCss}>faster response times.</span>
							</li>
							<li className="">
								Prioritized{" "}
								<span className={boldTextCss}>
									accessibility best practices
								</span>{" "}
								by integrating UI frameworks with built-in accessibility
								primitives like <span className={boldTextCss}>Radix-UI </span>
								and <span className={boldTextCss}> Shadcn-UI.</span>
							</li>
							<li className="">
								optimized <span className={boldTextCss}>core web vitals,</span>
								ensuring best user experience through improved performance and
								responsiveness.
							</li>
							<li className="">
								Leveraged <span className={boldTextCss}>Tailwind CSS </span> for
								styling, ensuring{" "}
								<span className={boldTextCss}>mobile responsiveness</span> and
								enhancing user experience{" "}
								<span className={boldTextCss}>across devices.</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<Wave />
		</div>
	)
}

export default Upwork
