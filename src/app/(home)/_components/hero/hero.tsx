import HeroButtons from "./hero-buttons"
import HeroParagraph from "./hero-paragraph"
import TechnologiesMarquee from "./technologies-marquee"
import BgImage from "./bg-image"

const Hero = () => {
	return (
		<div className="relative min-h-[85vh] sm:pt-2">
			<BgImage />
			<div className="mx-auto max-w-7xl p-4 text-left sm:pl-12">
				<h1 className="relative text-4xl font-bold leading-tight max-sm:text-3xl">
					I&apos;m a <span className="gradient-text text-5xl font-bold max-md:text-4xl max-sm:block">Full-Stack Web Developer</span>{" "}
					<br className="max-sm:hidden" />
					with more than <span className="font-bold text-secondary">three years </span> of experience.
				</h1>
				<div className="relative w-fit pb-20 pr-16 max-sm:px-4 max-sm:pt-4 sm:ml-16 sm:pt-6">
					<HeroParagraph />
					<div className="absolute bottom-6 right-0 flex gap-4">
						<HeroButtons />
					</div>
				</div>

				<div className="absolute bottom-0 right-0 flex gap-4 max-md:hidden">
					<TechnologiesMarquee />
				</div>
			</div>
		</div>
	)
}

export default Hero
