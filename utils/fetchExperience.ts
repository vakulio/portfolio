import { groq } from "next-sanity"
import { sanityClient } from "../sanity"
import { Experience } from "../typings"

const quary = groq`*[_type == 'experience'] {
    ...,
    technologies[] -> 
  }`

export const fetchExperience = async () => {
	const experiences: Experience[] = await sanityClient.fetch(quary)

	return experiences
}
