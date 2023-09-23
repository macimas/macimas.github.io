<svelte:head>
	<title>macimas.github.io</title>
</svelte:head>

<script>
	import './design.css';

	import getSplashText from 'lib/splash texts.js';
	import socials from 'lib/socials';
</script>

<main>
	<span class="name">
		<span>ma</span><span>ci</span><span>mas</span>
	</span>
	<br>
	<span>software developer</span>
	<br>
	<hr>
	<div class="socials">
		{#each socials as social}
			<a href={social.url}><img src="/img/icon/{social.label}.svg"></a>
		{/each}
	</div>
	<br>
	<div class="info">
		<p>{@html getSplashText()}</p>
	</div>
</main>
