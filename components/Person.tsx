import Link from "next/link"
import React from "react"
import { Cursor, useTypewriter } from "react-simple-typewriter"
import { urlFor } from "../sanity"
import { PageInfo } from "../typings"
import BackgroundCircle from "./BackgroundCircle"

type Props = {
	pageInfo: PageInfo
}

export const Person = ({pageInfo}: Props) => {
	const [text, count] = useTypewriter({
		words: [`Hi, my name's ${pageInfo.name}`, `I'm ${pageInfo.role}`],
		loop: true,
		delaySpeed: 1500
	})

	return (
		<div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
			<img
				src={urlFor(pageInfo?.personImage).url()}
				className="relative rounded-full h-32 w-32 mx-auto overflow-hidden top-20 z-0"
			/>
			<BackgroundCircle />
			<div className="relative top-5">
				<h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">{pageInfo.role}</h2>
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
