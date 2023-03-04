<script>
	import Box from "../Box.svelte";
	import splashTexts from "../json/splash texts.json";

	let showAllSplashTexts = false;
</script>

<Box>
	<h1>the debug box</h1>
	<button on:click={() => showAllSplashTexts = !showAllSplashTexts}>click me to show all splash texts!</button>
	{#if showAllSplashTexts}
		<div class="macimas-and-cheese-leave" style="padding:16px;height:320px;text-align:center;overflow-y:scroll">
			<h1>all (default) splash texts</h1>
			{#each splashTexts.default as splashy, i}
				<div>
					<sub style="color:#fff4">{i}. </sub>
					<code>{@html splashy}</code>
				</div>
			{/each}
		</div>
	{/if}
</Box>