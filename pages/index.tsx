import { NextPage } from "next"
import Head from "next/head"
import { WorkExp, About, Projects, Header, Person, Skills, ContactMe } from "../components"

const Home: NextPage = () => {
	return (
		<div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
			<Head>
				<title>Vakulio Portfolio</title>
			</Head>
			<Header />
			<section id="person" className="snap-center">
				<Person />
			</section>
			<section id="about" className="snap-center">
				<About />
			</section>
			<section id="exp" className="snap-center">
				<WorkExp />
			</section>
			<section id="skills" className="snap-start">
				<Skills />
			</section>
			<section id="projects" className="snap-start">
				<Projects />
			</section>
			<section id="contact" className="snap-start">
				<ContactMe/>
			</section>
		</div>
	)
}

export default Home
