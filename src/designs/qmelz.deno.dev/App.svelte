<script>
	import './App.css';
	import links from "bits/links.json";
	import { createLogos } from "libs/logos.svelte.js";
	import { createQuotes } from "libs/quotes.svelte.js";

	const logos = createLogos();
	const quotes = createQuotes();
</script>


<main>
	<img onclick={logos.update} src={logos.current.url}>

	<p onclick={quotes.update}>
		{@html quotes.current.text}
	</p>

	<footer>
		{#each links as item}
		<div>
			{item.name}

			{#each item.items as item}
			<span title={item.text.join('\n')}>
				-
				{#if item.link}
					<a href={item.link}>{item.name}</a>
				{:else}
					<span>{item.name}</span>
				{/if}
			</span>
			{/each}

		</div>
		{/each}
	</footer>
</main>