<script>
	import { page } from '$app/stores'
	import { marked } from 'marked'
	import { Head } from 'svead'

	/** @type {import('./$types').PageData} */
	export let data
</script>

<Head
	title={`${data.post.title} · ${data.metadata.name}`}
	description={data.post.content.slice(0, 120)}
	image={data.post.coverImage.url}
	url={$page.url.toString()}
/>

<div class="sm:-mx-5 md:-mx-10 lg:-mx-20 xl:-mx-38 mb-5">
	<img
		class="rounded-xl"
		src={data.post.coverImage.url}
		alt={`Cover image for ${data.post.title}`}
	/>
</div>

<div class="prose prose-xl">
	<h1>{data.post.title}</h1>
</div>

<p class="text-secondary text-xs tracking-widest font-semibold">
	{new Date(data.post.date).toDateString()}
</p>

<div class="mb-5 flex justify-between">
	<div>
		{#if data.post.tags}
			<div class="mt-5 space-x-2">
				{#each data.post.tags as tag}
					<span class="badge badge-primary">{tag}</span>
				{/each}
			</div>
		{/if}
	</div>
</div>

<article class="prose prose-lg">
	{@html marked(data.post.content)}
</article>
