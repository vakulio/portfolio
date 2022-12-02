import React from "react"
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"
import { Social } from "../typings"

type Props = {
	socials: Social[]
}

const Header = ({ socials }: Props) => {
	return (
		<header className="sticky top-0 p-0 flex items-start justify-between max-w-7xl mx-auto xl:items-center z-10">
			<motion.div
				initial={{
					x: -500,
					opacity: 0,
					scale: 0.5
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1
				}}
				transition={{
					duration: 0.7
				}}
				className="flex flex-row items-center"
			>
				{socials.map((s) => (
					<SocialIcon key={s._id} url={s.url} fgColor="gray" bgColor="transparent" />
				))}
			</motion.div>

			<motion.div
				initial={{
					x: 500,
					opacity: 0,
					scale: 0.5
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1
				}}
				transition={{
					duration: 0.7
				}}
				className="flex flex-row items-center text-gray-300 cursor-pointer"
			>
				<SocialIcon className="cursor-pointer" network="email" fgColor="gray" bgColor="transparent" />
				<p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get In Touch</p>
			</motion.div>
		</header>
	)
}

export default Header
