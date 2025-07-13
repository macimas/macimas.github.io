<script>
	import { createLogos } from "libs/logos.svelte.js";
	import { createQuotes } from "libs/quotes.svelte.js";

	import { addModal } from "./Modals.svelte";
	import { crab_status } from "./libs/crab.svelte.js";

	import CrabLogos from "./crabs/Logos.svelte";
	import CrabQuotes from "./crabs/Quotes.svelte";

	const logos = createLogos();
	const quotes = createQuotes();

	function logoClick() {
		if (!crab_status.active) {
			logos.update();
		}
		else {
			addModal({
				component: CrabLogos
			});
		}
	}

	function quoteClick() {
		if (!crab_status.active) {
			quotes.update();
		}
		else {
			addModal({
				component: CrabQuotes
			});
		}
	}
</script>


<header>
	<div class="logo clicky crabby" onclick={logoClick}>
		<img src={logos.current.url}>

		{#if logos.count}
			{#key logos.count}
				<small class="count">
					{logos.count}
				</small>
			{/key}
		{/if}
	</div>

	<div class="quote clicky crabby" onclick={quoteClick}>
		<p>
			<code>
				{@html quotes.current.text}
			</code>
		</p>
		
		{#if quotes.count}
			{#key quotes.count}
			<small class="count">
				{quotes.count}
			</small>
			{/key}
		{/if}
	</div>
</header>