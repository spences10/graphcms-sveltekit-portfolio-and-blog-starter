<script>
	import { page } from '$app/stores'
	import ProjectCard from '$lib/components/project-card.svelte'
	import { Head } from 'svead'

	/** @type {import('./$types').PageData} */
	export let data
</script>

<Head
	title={`Projects · ${data.metadata.siteName}`}
	description={`A list of recent projects.`}
	image={data.metadata.openGraphDefaultImage.url}
	url={$page.url.toString()}
/>

<h1 class="font-bold mb-20 text-center text-5xl">
	Recent Projects by Me
</h1>

<div
	class="grid gap-10 md:grid-cols-4 md:px-10 lg:grid-cols-6 lg:-mx-52"
>
	{#each data.projects as { name, slug, description, image }}
		<ProjectCard {name} {description} url={image[0].url} {slug} />
	{/each}
</div>
