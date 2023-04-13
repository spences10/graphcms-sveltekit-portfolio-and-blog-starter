import { client } from '$lib/graphql-client'
import { projectsQuery } from '$lib/graphql-queries'

/** @type {import('./$types').PageLoad} */
export const load = async () => {
	const { projects } = await client.request(projectsQuery)

	return {
		projects
	}
}
