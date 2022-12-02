import { groq } from "next-sanity"
import { sanityClient } from "../sanity"
import { Project } from "../typings"

const quary = groq`*[_type == 'project'] {
    ...,
    technologies[] -> 
  }`

export const fetchProjects = async () => {
	const projects: Project[] = await sanityClient.fetch(quary)

	return projects
}
