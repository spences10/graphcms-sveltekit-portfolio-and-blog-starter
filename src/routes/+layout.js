import { client } from '$lib/graphql-client'
import {
	authorsQuery,
	siteMetadataQuery,
	socialsQuery
} from '$lib/graphql-queries'

/** @type {import('./$types').LayoutLoad} */
export const load = async () => {
	const fetchMetaData = async () => {
		const { projectMetadatas } = await client.request(
			siteMetadataQuery
		)
		return projectMetadatas[0]
	}

	const fetchSocials = async () => {
		const { socials } = await client.request(socialsQuery)
		return socials[0]
	}

	const fetchAuthors = async () => {
		const { authors } = await client.request(authorsQuery)
		return authors[0]
	}

	return {
		metadata: fetchMetaData(),
		socials: fetchSocials(),
		authors: fetchAuthors()
	}
}
