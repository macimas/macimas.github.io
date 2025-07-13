<script>
	import { scale } from "libs/transitions.js";

	const { design } = $props();
</script>


<svelte:head>
	<title>splash</title>
</svelte:head>


<main out:scale>
	{#if design.component}
		hey give me a moment...
	{:else}
		is "{design.name}" valid?
	{/if}
</main>