import React from "react"
import { motion } from "framer-motion"
import { Skill as SkillType } from "../typings"
import { urlFor } from "../sanity"

type Props = {
	directionLeft?: boolean
	skill: SkillType
}

function Skill({ directionLeft, skill }: Props) {
	return (
		<div className="group relative flex cursor-pointer">
			<motion.img
				initial={{
					x: directionLeft ? -200 : 200,
					opacity: 0
				}}
				transition={{ duration: 1 }}
				whileInView={{ opacity: 1, x: 0 }}
				src={urlFor(skill?.image).url()}
				alt={skill.title}
				className="object-cover w-10 h-10 xl:w-17 xl:h-17 md:w-15 md:h-15 filter group-hover:grayscale transition duration-300 ease-in-out"
			/>
			<div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-10 h-10 xl:w-17 xl:h-17 md:w-15 md:h-15 rounded-full z-0">
				<div className="flex items-center justify-center h-full">
					<p className="text-3xl font-bold text-black opacity-100">
						{skill.progress}%
					</p>
				</div>

			</div>
		</div>
	)
}

export default Skill
