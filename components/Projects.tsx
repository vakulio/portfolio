import React from "react"
import { motion } from "framer-motion"
import { Project as ProjectType } from "../typings"
import { urlFor } from "../sanity"
import Image from "next/image"

type Props = {
	projects: ProjectType[]
}

const Projects = ({ projects }: Props) => {
	return (
		<motion.div
			initial={{
				opacity: 0
			}}
			whileInView={{
				opacity: 1
			}}
			transition={{
				duration: 1.6
			}}
			className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
		>
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>
			<div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
				{projects.map((p: ProjectType, i: number) => (
					<div key={p._id} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
						<motion.img
							initial={{
								y: -300,
								opacity: 0
							}}
							transition={{
								duration: 1.2
							}}
							whileInView={{
								opacity: 1,
								y: 0
							}}
							viewport={{
								once: true
							}}
							src={urlFor(p?.image).url()}
							alt={p.title}
						/>
						<div className="space-y-10 px-0 md:px-10 max-w-6xl">
							<h4 className="text-4xl font-semibold text-center">
								<span className="underline decoration-[#F7AB0A]/50">
									Case Study {i + 1} of {projects.length}</span>{" "}
									{p?.title}
							</h4>
							<div className="flex items-center space-x-2 justify-center">
								{p?.technologies.map((t) => (
									<Image width={50} height={50} className="h-8 w-8" key={t._id} src={urlFor(t.image).url()} alt={t.title} />
								))}
							</div>
							<p className="text-lg text-center md:text-left ">{p.summary}</p>
						</div>
					</div>
				))}
			</div>
			<div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12"></div>
		</motion.div>
	)
}

export default Projects
