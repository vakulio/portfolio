import { groq } from "next-sanity"
import { sanityClient } from "../sanity"
import { Skill } from "../typings"

const quary = groq`*[_type == 'skill']`

export const fetchSkills = async () => {
	const skills: Skill[] = await sanityClient.fetch(quary)

	return skills
}
