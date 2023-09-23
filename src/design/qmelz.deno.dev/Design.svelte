<svelte:head>
	<title>the fuck</title>
</svelte:head>

<script>
	import './design.css';
	import socials from 'lib/socials.json';
	import getSplashText from 'lib/splash texts.js';

	let splash_text = getSplashText();
</script>

<main>
	<img src="img/logo/macimas.svg">
	<p>{splash_text}</p>
	<footer>
		{#each socials as social}
			<a href={social.url}>{social.label}</a>
		{/each}
	</footer>
</main>