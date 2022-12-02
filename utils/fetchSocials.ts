import { groq } from "next-sanity"
import { sanityClient } from "../sanity"
import { Social } from "../typings"

const quary = groq`*[_type == 'social']`

export const fetchSocials = async () => {
	const socials: Social[] = await sanityClient.fetch(quary)

    return socials
}
