import { client } from '$lib/graphql-client'
import { authorsQuery } from '$lib/graphql-queries'

/** @type {import('./$types').PageLoad} */
export const load = async () => {
	const { authors } = await client.request(authorsQuery)

	return {
		authors
	}
}
