import HeroButtons from "./hero-buttons"
import HeroParagraph from "./hero-paragraph"
import TechnologiesMarquee from "./technologies-marquee"

const Hero = () => {
	return (
		<div className="relative  mt-12 h-[80vh] ">
			<div className="mx-auto max-w-7xl p-4 text-left ">
				<h1 className="text-4xl font-bold leading-tight">
					I&apos;m a{" "}
					<span className="gradient-text text-5xl font-bold">
						Full-Stack Web Developer
					</span>{" "}
					<br />
					with more than two years of experience.
				</h1>
				<div className="relative ml-16 w-fit pb-20 pr-16 pt-16">
					<HeroParagraph />
					<div className="absolute bottom-0 right-0 flex gap-4">
						<HeroButtons />
					</div>
				</div>

				<div className="absolute bottom-0 right-0 flex gap-4">
					<TechnologiesMarquee />
				</div>
			</div>
		</div>
	)
}

export default Hero
