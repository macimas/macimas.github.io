<script setup>
	import links from "bits/links";
	import './App.css';

	const filtered_links = [];

	links.forEach((category) => {
		category.items.forEach((link) => {
			if (!link.is_important) return;

			link.label = `${category.name.toLowerCase()}`;
			link.text.unshift(link.name);
			link.text = link.text.join("\n");

			filtered_links.push(link);
		});
	});
</script>


<svelte:head>
	<title>skibidi::home</title>
</svelte:head>


<h1 id="title">{location.host}</h1>

<nav>
	<b>what the fuck do i put here</b>
	<div>

	</div>
</nav>

<main>
	<p>
		Hi! I'm Denis. I'm a lazy person who does programming, graphic design, and whatever for fun.
		I also like listening to music and occasionally binge-watch anime.
	</p>
	<p>
		Right now, I feel incredibly uncertain and anxious about the future.
	</p>

	<p>
		<i>This site was written in <a href="https://svelte.dev/">Svelte</a>. Colors come from <a href="https://github.com/ayu-theme/ayu-colors">Ayu</a> <sup><a href="https://skybldev.eu.org/r/ayu-colors.html">[color sheet]</a></sup>. The domain is kindly provided by github.io.</i>
	</p>
</main>

<footer>
	<nav>
		<b>socials</b>

		<div>
			{#each filtered_links as item}
			<a href={item.link} title={item.text}>
				{item.label}
			</a>
			{/each}
		</div>

		<b>weee</b>
	</nav>
	<div id="footerend">
	</div>
</footer>