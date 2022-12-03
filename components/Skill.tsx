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
				animate={{ opacity: 1, x: 0 }}
				src={urlFor(skill?.image).url()}
				alt={skill.title}
				className="object-cover w-10 h-10 xl:w-17 xl:h-17 md:w-15 md:h-15 filter group-hover:grayscale transition duration-300 ease-in-out"
			/>
		</div>
	)
}

export default Skill
