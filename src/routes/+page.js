import { client } from '$lib/graphql-client'
import { authorsQuery, projectsQuery } from '$lib/graphql-queries'

/** @type {import('./$types').PageLoad} */
export const load = async () => {
	const [authorRes, projectsRes] = await Promise.all([
		client.request(authorsQuery),
		client.request(projectsQuery)
	])
	const { authors } = authorRes
	const { projects } = projectsRes

	return {
		projects,
		authors
	}
}
