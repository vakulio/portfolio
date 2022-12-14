import React from "react"
import { motion } from "framer-motion"
import { PageInfo } from "../typings"
import { urlFor } from "../sanity"

type Props = {
	pageInfo: PageInfo
}

const About = ({pageInfo}: Props) => {
	return (
		<motion.div 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{duration: 1.5}}
        className="flex relative flex-col text-center md:text-left h-screen md:flex-row max-w-7xl px-1 justify-evenly mx-auto items-center">
			<h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
			<motion.img
				initial={{
					x: -200,
					opacity: 0
				}}
				whileInView={{ x: 0, opacity: 1 }}
				viewport={{ once: true }}
				transition={{
					duration: 1
				}}
				className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
				src={urlFor(pageInfo?.profilePic).url()}
			/>
			<div className="space-y-10 px-0 md:px-10">
				<h4 className="text-4xl font-semibold">
					Here is a little <span className="underline decoration-[#F7AB0A]/30">background</span>
				</h4>
				<p className="text-sm">
					{pageInfo?.backgroundInfo}
				</p>
			</div>
		</motion.div>
	)
}

export default About