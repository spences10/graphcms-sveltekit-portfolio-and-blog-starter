import { client } from '$lib/graphql-client'
import { postsQuery } from '$lib/graphql-queries'

/** @type {import('./$types').PageLoad} */
export const load = async () => {
	const { posts } = await client.request(postsQuery)

	return {
		posts
	}
}
