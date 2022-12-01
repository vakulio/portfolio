import React from "react"
import { motion } from "framer-motion"
import { Experience } from "../typings"
import { urlFor } from "../sanity"
import Image from "next/image"

type Props = {
	experienceOne: Experience
}

const ExpCard = ({ experienceOne }: Props) => {
	return (
		<article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px]  md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 ">
			<motion.img
				initial={{
					y: -100,
					opacity: 0
				}}
				whileInView={{
					opacity: 1,
					y: 0
				}}
				viewport={{
					once: true
				}}
				transition={{
					duration: 1.2
				}}
				className="w-32 h-32  bg-white rounded-3xl xl:w-[200px] xl:h-[200px] object-cover object-center"
				src={urlFor(experienceOne?.companyImage).url()}
				alt="senama"
			/>
			<div className="px-0 md:px-10">
				<h4 className="text-4xl font-light">Fullstack developer</h4>
				<p className="font-bold text-2xl mt-1">SenamaSoft</p>
				<div className="flex space-x-2 my-2">
					{experienceOne.technologies.map((tech) => (
						<Image width={50} height={50} key={tech._id} className="h-10 w-10" src={urlFor(tech.image).url()} alt={tech.title} />
					))}
				</div>
				<p>
					{new Date(experienceOne.dateStarted).toDateString()} - {experienceOne.isCurrentWork ? "Present" : new Date(experienceOne.dateStarted).toDateString()}
				</p>
				<ul className="list-disc space-y-4 ml-5 text-lg max-h-96 pr-5 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80">
					{experienceOne.points.map((p, i) => (
						<li key={i}>{p}</li>
					))}
				</ul>
			</div>
		</article>
	)
}

export default ExpCard
