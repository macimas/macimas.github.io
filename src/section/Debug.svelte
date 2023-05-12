<script>
	import Box from "lib/Box.svelte";
	import Dropdown from "lib/Dropdown.svelte";
	import { modal } from "lib/Modal.svelte";
	import { tooltip } from "lib/tooltip.js";
	import splashTexts from "../json/splash texts.json";
	import logos from "../json/logos.json";

	let showAllSplashTexts = false;
	let showAllLogos = false;
</script>

<Box>
	<h1>🦀 the debug box 🦀</h1>
	hi hello you beautiful dawg, welcome to the debug box 🦀
	<div>
		<Dropdown options={['egg', 'amongus']}/>
		<button class="egg" on:click={() => modal('test').show()}>show JCB Bible - Genesis 1: Creation of Heaven and Earth</button>
	</div>

	<button class="egg" on:click={() => showAllSplashTexts = !showAllSplashTexts}>click me to show all splash texts!</button>
	{#if showAllSplashTexts}
		<div class="macimas-and-cheese-leave" style="padding:16px;height:320px;text-align:center;overflow-y:scroll">
			<h1>all (default) splash texts</h1>
			{#each splashTexts.default as splashy, i}
				<div>
					<sub style="color:#fff4">{i + 1}.</sub>
					<br>
					<div class="splash-text clickMe">
						<p><code>{@html splashy}</code></p>
					</div>
				</div>
			{/each}
		</div>
	{/if}

	<button class="egg" on:click={() => showAllLogos = !showAllLogos}>click me to show all logos!</button>
	{#if showAllLogos}
		<div class="macimas-and-cheese-leave" style="padding:16px;height:320px;text-align:center;overflow-y:scroll">
			<h1>all (not counter specific) logos</h1>
			{#each logos as logo, i}
				<div>
					<sub style="color:#fff4">{i + 1}.</sub>
					<div class="logo clickMe" data-tooltip={logo} use:tooltip>
						<img src={`/img/logo/${logo}`}>
					</div>
				</div>
			{/each}
		</div>
	{/if}
</Box>