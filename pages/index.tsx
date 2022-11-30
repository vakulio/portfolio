import { GetStaticProps, NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import { WorkExp, About, Projects, Header, Person, Skills, ContactMe } from "../components"
import { Experience, PageInfo, Project, Skill, Social } from "../typings"
import { fetchExperience } from "../utils/fetchExperience"
import { fetchPageInfo } from "../utils/fetchPageInfo"
import { fetchProjects } from "../utils/fetchProjects"
import { fetchSkills } from "../utils/fetchSkills"
import { fetchSocials } from "../utils/fetchSocials"

type Props = {
	pageInfo: PageInfo
	experience: Experience[]
	skills: Skill[]
	projects: Project[]
	socials: Social[]
}

const Home = ({ pageInfo, experience, skills, projects, socials }: Props) => {
	return (
		<div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
			<Head>
				<title>Vakulio Portfolio</title>
			</Head>
			<Header socials={socials} />
			<section id="person" className="snap-center">
				<Person pageInfo={pageInfo} />
			</section>
			<section id="about" className="snap-center">
				<About pageInfo={pageInfo} />
			</section>
			<section id="exp" className="snap-center">
				<WorkExp experience={experience} />
			</section>
			<section id="skills" className="snap-start">
				<Skills />
			</section>
			<section id="projects" className="snap-start">
				<Projects />
			</section>
			<section id="contact" className="snap-start">
				<ContactMe />
			</section>
			<Link href="#person">
				<footer className="sticky bottom-5 w-full cursor-pointer">
					<div className="flex items-center justify-center">
						<img className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer" src="#" alt="personPhoto" />
					</div>
				</footer>
			</Link>
		</div>
	)
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {
	const pageInfo: PageInfo = await fetchPageInfo()
	const experience: Experience[] = await fetchExperience()
	const skills: Skill[] = await fetchSkills()
	const projects: Project[] = await fetchProjects()
	const socials: Social[] = await fetchSocials()

	return {
		props: {
			pageInfo,
			experience,
			skills,
			projects,
			socials
		},
		revalidate: 300,
	}
}
