import React from "react"
import { motion } from "framer-motion"

type Props = {}

const BackgroundCircle = (props: Props) => {
	return (
		<motion.div 
        initial={{
            opacity: 0
        }}
        animate={{
            scale: [1,2,2,3,1],
            opacity: [0.3, 0.4, 0.8, 0.2, 1.0]
        }}
        transition={{
            duration: 2.3
        }}
        className="relative flex justify-center items-center">
			<div className="absolute border border-[#ffffff36] rounded-full h-[200px] w-[200px] m-52 animate-ping" />
			<div className="absolute border border-[rgb(36,36,36)] rounded-full h-[300px] w-[300px] m-52"/>
			<div className="absolute border border-[rgb(36,36,36)] rounded-full h-[500px] w-[500px] m-52"/>
			<div className="absolute border border-[#f11818] opacity-20 rounded-full h-[650px] w-[650px] m-52 animate-pulse"/>
			<div className="absolute border border-[#f11818] opacity-20 rounded-full h-[800px] w-[800px] m-52" />
		</motion.div>
	)
}

export default BackgroundCircle
