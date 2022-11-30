import React from "react"
import { motion } from "framer-motion"

type Props = {
	project: any
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
                opacity:1, y: 0
            }}
            viewport={{
                once: true
            }}
            src="https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png" alt="project" />
			<div className="space-y-10 px-0 md:px-10 max-w-6xl">
				<h4 className="text-4xl font-semibold text-center">
					<span className="underline">Case {number + 1}</span>
				</h4>
				<p className="text-lg text-center md:text-left ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil neque eum optio architecto. Cupiditate consequuntur sint distinctio iusto laboriosam enim ab aperiam? Veniam sit iusto ea unde eos! Ex, aliquid?</p>
			</div>
		</div>
	)
}

export default Project
