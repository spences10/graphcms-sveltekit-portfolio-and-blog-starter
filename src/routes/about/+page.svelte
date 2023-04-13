<script>
	import { page } from '$app/stores'
	import { marked } from 'marked'
	import { Head } from 'svead'

	/** @type {import('./$types').PageData} */
	export let data
</script>

<Head
	title={`About · ${data.metadata.name}`}
	description={data.authors[0].bio.slice(0, 120)}
	image={data.metadata.openGraphDefaultImage.url}
	url={$page.url.toString()}
/>

<h1 class="font-bold text-center mb-20 text-5xl">About Me</h1>

<div class="flex mb-40 items-end">
	<div class="mr-6">
		<h2 class="text-3xl mb-4 font-bold tracking-wider">
			{data.authors[0].name}
		</h2>
		<p class="text-xl mb-4">{data.authors[0].intro}</p>
	</div>

	<img
		class="mask mask-squircle h-48"
		src={data.authors[0].picture.url}
		alt={data.authors[0].name}
	/>
</div>

<article class="prose prose-lg">
	{@html marked(data.authors[0].bio)}
</article>
