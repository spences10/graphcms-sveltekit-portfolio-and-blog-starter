<script>
	import Footer from '$lib/components/footer.svelte'
	import Navbar from '$lib/components/navbar.svelte'
	import { onMount } from 'svelte'
	import { themeChange } from 'theme-change'
	import '../app.css'

	onMount(async () => {
		themeChange(false)
	})

	/** @type {import('./$types').LayoutData} */
	export let data
</script>

<Navbar />
<main class="container max-w-3xl mx-auto px-4 mb-20">
	<slot />
</main>
<Footer {data} />
