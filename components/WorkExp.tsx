import React from "react"
import { motion } from "framer-motion"
import ExpCard from "./ExpCard"
import { Experience } from "../typings"

type Props = {
	experience: Experience[]
}

const WorkExp = ({ experience }: Props) => {
	return (
		<motion.div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
			<h3 className="absolute text-center top-10 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Work Experience</h3>
			<div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
				{experience?.map(e => (
					<ExpCard key={e._id} experienceOne={e} />
				))}
			</div>
		</motion.div>
	)
}

export default WorkExp