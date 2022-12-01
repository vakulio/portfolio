import React from "react"
import { motion } from "framer-motion"
import { Project } from "../typings"
import { urlFor } from "../sanity"
import Image from "next/image"

type Props = {
	project: Project
	number: number
}

function Project({ project, number }: Props) {
	return (
		<div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
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
				src={urlFor(project?.image).url()}
				alt={project.title}
			/>
			<div className="space-y-10 px-0 md:px-10 max-w-6xl">
				<h4 className="text-4xl font-semibold text-center">
					<span className="underline">{project.title}</span>
				</h4>
				<div className="flex items-center space-x-2 justify-center">
					{project.technologies.map((t) => (
						<Image width={50} height={50} className="h-8 w-8" key={t._id} src={urlFor(t.image).url()} alt={t.title} />
					))}
				</div>
				<p className="text-lg text-center md:text-left ">{project.summary}</p>
			</div>
		</div>
	)
}

export default Project
