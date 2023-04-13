<script>
	import ProjectCard from '$lib/components/project-card.svelte'
	import { Head } from 'svead'

	/** @type {import('./$types').PageData} */
	export let data
</script>

<Head
	title={`${data.metadata.name} · ${data.authors[0].name}`}
	description={data.metadata.description}
	image={data.metadata.openGraphDefaultImage.url}
	url={`${data.metadata.siteUrl}`}
/>

<h1 class="font-bold text-center mb-20 text-5xl">
	Welcome to my Portfolio
</h1>

{#each data.authors as { name, intro, picture: { url } }}
	<div class="flex mb-40 items-end">
		<div class="mr-6">
			<h2 class="text-3xl mb-4 font-bold tracking-wider">{name}</h2>
			<p class="text-xl mb-4">{intro}</p>
		</div>

		<img class="mask mask-squircle h-48" src={url} alt={name} />
	</div>
{/each}

<div
	class="grid gap-10 md:grid-cols-4 md:px-10 lg:grid-cols-6 lg:-mx-52"
>
	{#each data.projects as { name, slug, description, image }}
		<ProjectCard {name} {description} url={image[0].url} {slug} />
	{/each}
</div>
