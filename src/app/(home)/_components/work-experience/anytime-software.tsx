import Image from "next/image"
import Wave from "./wave"

const AnyTimeSoftware = () => {
	let techCss = "rounded-lg bg-secondary-foreground/80 px-2 text-background"
	let boldTextCss = "font-bold text-secondary-foreground/80"
	return (
		<div className="relative overflow-hidden border-b pt-24 shadow-lg">
			<div className="relative z-10 mx-auto grid max-w-7xl grid-cols-3 grid-rows-1 gap-y-8 px-8 max-lg:grid-cols-1 max-sm:p-2 max-sm:pl-4">
				<div className="_title col-span-1 flex h-fit flex-col items-center">
					<a href="https://www.linkedin.com/company/anytime-software">
						<div className="relative mb-2 aspect-square w-24 overflow-hidden rounded-full">
							<Image sizes="96px" fill className="object-cover" alt="AnyTime Software Logo" src="/companies/anytime-software.jpeg" />
						</div>
					</a>
					<div className="text-3xl font-bold text-secondary">AnyTime Software</div>
					<div className="text-xl font-bold text-secondary-foreground/80">April 2024 - June 2024</div>
				</div>
				<div className="col-span-2 text-xl">
					<div className="text-3xl font-bold text-secondary-foreground decoration-secondary/40 underline-offset-4 max-sm:mb-2 max-sm:text-xl max-sm:underline">
						&gt; Full Stack Web Developer
					</div>
					<div className="">
						<span className="font-bold text-secondary">Fields: </span>
						Marketing, cold emails automation.
					</div>
					<div className="">
						<div className="font-bold text-secondary">Technologies:</div>
						<div className="my-2 flex flex-wrap gap-1 whitespace-nowrap pl-12 text-base font-bold max-sm:pl-6">
							<div className={techCss}>TypeScript</div>
							<div className={techCss}>React</div>
							<div className={techCss}>Next.JS</div>
							<div className={techCss}>Node.JS</div>
							<div className={techCss}>Nest.JS</div>
							<div className={techCss}>MongoDB</div>
							<div className={techCss}>Redux</div>
							<div className={techCss}>Redux-ToolKit</div>
							<div className={techCss}>React-flow</div>
							<div className={techCss}>Material UI</div>
							<div className={techCss}>Selenium</div>
							<div className={techCss}>Jest</div>
							<div className={techCss}>PlayWright</div>
							<div className={techCss}>AWS</div>
							<div className={techCss}>EC2</div>
							<div className={techCss}>PM2</div>
							<div className={techCss}>NginX</div>
							<div className={techCss}>Github Actions</div>
						</div>
					</div>
					<div className="pb-24">
						<div className="font-bold text-secondary">Day-To-Day:</div>
						<ul className="list-disc pl-12 max-sm:pl-6">
							<li className="">
								Collaborated on building large-scale backend applications using <span className={boldTextCss}>Nest.JS</span> along with{" "}
								<span className={boldTextCss}>Next.JS </span> for the client-side.
							</li>
							<li className="">
								Utilized <span className={boldTextCss}>CRON jobs </span> extensively for automated <span className={boldTextCss}>data scraping </span> with
								<span className={boldTextCss}> Selenium </span> and email automation through <span className={boldTextCss}> SMTP </span>
								for sending emails and
								<span className={boldTextCss}> IMAP </span>
								for receiving emails.
							</li>
							<li className="">
								Executed complex client-side state management using <span className={boldTextCss}>Redux Toolkit, </span> handling data fetching, displaying user
								notifications, and state updates to ensure a pleasant user experience.
							</li>
							<li className="">
								Created interactive user experience with <span className={boldTextCss}>React Flow, </span> allowing users to tailor their custom functionalities
								using modular, Lego-like blocks.
							</li>
							<li className="">
								Conducted meticulous <span className={boldTextCss}>end-to-end testing </span> with <span className={boldTextCss}>Playwright </span> and{" "}
								<span className={boldTextCss}>Jest </span>
								for <span className={boldTextCss}>unit testing, </span> detecting errors and bugs in early development stages to ensure robustness with code
								changes.
							</li>
						</ul>
					</div>
				</div>
			</div>
			<Wave />
		</div>
	)
}

export default AnyTimeSoftware
