import Education from "./_components/education/education"
import Hero from "./_components/hero/hero"
import WorkExperience from "./_components/work-experience/work-experience"

export default async function Home() {
	return (
		<div className="">
			<Hero />
			<WorkExperience />
			<Education />
		</div>
	)
}
