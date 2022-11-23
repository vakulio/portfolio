import React from "react"
import { Images } from "../helpers/images"
import { motion } from "framer-motion"

type Props = {}

const ExpCard = (props: Props) => {
	return (
		<article className="flex">
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
				className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
				src={Images.senama}
				alt="senama"
			/>
            <div className="px-0 md:px-10">
                <h4 className="text-4xl font-light">Fullstack developer</h4>
                <p className="font-bold text-2xl mt-1">SenamaSoft</p>
                <div className="flex space-x-2 my-2">
                    <img className="h-10 w-10 rounded-full" src="https://cdn-icons-png.flaticon.com/128/1199/1199124.png" alt="JS" />
                    <img className="h-10 w-10 rounded-full" src="https://cdn-icons-png.flaticon.com/128/1126/1126012.png" alt="react" />
                    <img className="h-10 w-10 rounded-full" src="https://cdn-icons-png.flaticon.com/128/732/732190.png" alt="css" />
                    <img className="h-10 w-10 rounded-full" src="https://cdn-icons-png.flaticon.com/128/1051/1051277.png" alt="html" />
                </div>
                <p>May 2022 - Present</p>
                <ul className="list-disc space-y-4 ml-5 text-lg">
                    <li>summary</li>
                </ul>
            </div>
		</article>
	)
}

export default ExpCard
