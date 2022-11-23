import Link from "next/link"
import React from "react"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircle from "./BackgroundCircle"

type Props = {}

const Person = (props: Props) => {
	const [text, count] = useTypewriter({
		words: ["Hi, my name's Uladimir", "I'm JavaScript Developer"],
		loop: true,
		delaySpeed: 1500
	})

	return (
		<div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
			<img
				src="https://media-exp1.licdn.com/dms/image/C4D03AQFIMMEh8EO0dw/profile-displayphoto-shrink_400_400/0/1659722447675?e=1674691200&v=beta&t=6YElUN31eXzXnrXpjM8-RDt-SxtrNPNA9uvoEL9wUEg"
				className="relative rounded-full h-32 w-32 mx-auto overflow-hidden top-20 z-0"
			/>
			<BackgroundCircle />
			<div className="relative top-5">
				<h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Fullstack Developer</h2>
				<h1 className="text-5xl lg:text-6xl font-semibold px-10">
					<span>{text}</span>
					<Cursor cursorColor="green" />
				</h1>
				<div className="pt-5">
					<Link href='#about'>
						<button className="personButton">About</button>
					</Link>
					<Link href='#exp'>
						<button className="personButton">Experience</button>
					</Link>
					<Link href='#skills'>
						<button className="personButton">Skills</button>
					</Link>
					<Link href='#projects'>
						<button className="personButton">Projects</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Person
