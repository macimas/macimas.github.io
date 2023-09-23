<svelte:head>
	<title>mdt::home</title>
</svelte:head>

<script>
	import './design.css';
	import socials from 'lib/socials'
</script>

<h1 id="title">macimas.github.io</h1>

<nav>
	<b>socials</b>
	<div>
		{#each socials as social}
			<a href={social.url}>{social.label}</a>
		{/each}
	</div>
</nav>

<main>
	<p>
		hi! i'm macimas. i'm a terrible programmer that does JavaScript. i use arch, btw.
	</p>

	<p>
		<i>site was made with <a href="https://svelte.dev">Svelte</a>. domain provided by github.io.</i>
	</p>
</main>

<footer>
	<nav>
		<b>the fuck do i put here</b>
		<div></div>
		<b>seriously, idk</b>
	</nav>
	<div id="footerend">
</footer>