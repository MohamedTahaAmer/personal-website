import Image from "next/image"
import HeroButtons from "./hero-buttons"
import HeroParagraph from "./hero-paragraph"
import TechnologiesMarquee from "./technologies-marquee"

const Hero = () => {
	return (
		<div className="relative min-h-[85vh] sm:pt-8 ">
			<div className="absolute inset-0 w-full  overflow-hidden max-2xl:hidden ">
				<Image
					fill
					className="object-cover"
					alt="Mountain Image"
					src="/hero/hero.png"
				/>
			</div>
			<div className="mx-auto max-w-7xl p-4 text-left sm:pl-12 ">
				<h1 className="text-4xl font-bold leading-tight max-sm:text-3xl">
					I&apos;m a{" "}
					<span className="gradient-text text-5xl font-bold max-sm:block max-sm:text-4xl ">
						Full-Stack Web Developer
					</span>{" "}
					<br className="max-sm:hidden" />
					with more than two years of experience.
				</h1>
				<div className="relative w-fit pb-20 pr-16 max-sm:px-4 max-sm:pt-4 sm:ml-16 sm:pt-8 ">
					<HeroParagraph />
					<div className="absolute bottom-0 right-0 flex  gap-4 ">
						<HeroButtons />
					</div>
				</div>

				<div className="absolute bottom-0 right-0 flex gap-4 max-sm:hidden">
					<TechnologiesMarquee />
				</div>
			</div>
		</div>
	)
}

export default Hero
