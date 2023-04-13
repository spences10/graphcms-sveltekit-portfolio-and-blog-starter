<script>
	import FacebookIcon from './facebook-icon.svelte'
	import TwitterIcon from './twitter-icon.svelte'
	import YouTubeIcon from './you-tube-icon.svelte'

	/** @type any */
	export let data
</script>

<footer
	class="p-10 footer bg-primary text-primary-content footer-center"
>
	<div class="grid grid-flow-col gap-4">
		<a class="link link-hover" href="/projects">Portfolio</a>
		<a class="link link-hover" href="/posts">Blog</a>
		<a class="link link-hover" href="/about">About</a>
	</div>
	<div>
		<div class="grid grid-flow-col gap-4">
			<a href={data.socials.twitterUrl}>
				<TwitterIcon />
			</a>
			<a href={data.socials.youTubeUrl}>
				<YouTubeIcon />
			</a>
			<a href={data.socials.facebookUrl}>
				<FacebookIcon />
			</a>
		</div>
	</div>
	<div>
		<p>
			Copyright &copy; {`${new Date().getFullYear()}`} - All right reserved
			{data.authors.name}
		</p>
	</div>
</footer>
