import React from "react"
import { motion } from "framer-motion"

type Props = {}

const About = (props: Props) => {
	return (
		<motion.div 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{duration: 1.5}}
        className="flex relative flex-col text-center md:text-left h-screen md:flex-row max-w-7xl px-1 justify-evenly mx-auto items-center">
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>
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
				src="https://media-exp1.licdn.com/dms/image/C4D03AQFIMMEh8EO0dw/profile-displayphoto-shrink_400_400/0/1659722447675?e=1674691200&v=beta&t=6YElUN31eXzXnrXpjM8-RDt-SxtrNPNA9uvoEL9wUEg"
			/>
			<div className="space-y-10 px-0 md:px-10">
				<h4 className="text-4xl font-semibold">
					Here is a little <span className="underline decoration-[#F7AB0A]/30">background</span>
				</h4>
				<p className="text-sm">
					Hi, my name is Uladzimir, and I am a JavaScript developer. (Perhaps, of course, it's more correct to say "TypeScript developer", but I believe in the power of JS). I'm interested in both front-end and back-end development. I like to learn
					new things. Experience with TypeScript, HTML, CSS, Scss, Next.js, Express.js, React, Redux-thunk, Expo, MongoDB. Some experience with AWS services. On top of that, I also have some experience with UI Component Libraries/Frameworks, such as
					Ant Design for React, MUI, and React Bootstrap. In my free time, I mentor trainees and assist in preparing for the assessment.
				</p>
			</div>
		</motion.div>
	)
}

export default About
