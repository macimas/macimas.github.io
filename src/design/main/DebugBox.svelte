<script>
	import Modal, { modal } from 'lib/Modal.svelte';
	import Menu from 'lib/Menu.svelte';
	import splash_texts from 'lib/splash texts.json';
	import logos from 'lib/logos.json';

	let splash_texts_count = 0;

	Object.keys(splash_texts).forEach(category => {
		splash_texts_count += splash_texts[category].length;
	});
</script>

<Modal id="logos">
	<h2>logos</h2>
	{#each logos as logo}
		<div class="logo clickity">
			<img src="/img/logo/{logo}">
		</div>

		<div class="splash-text clickity">
			<p><code>{logo}</code></p>
		</div>
	{/each}
</Modal>

<Modal id="splash-texts">
	{#each Object.keys(splash_texts) as category}
		<details open>
			<summary><h2>{category}</h2></summary>
			{#each splash_texts[category] as splash_text, i}
				<div class="splash-text clickity">
					<sub>{i + 1}.</sub>
					<p><code>{@html splash_text}</code></p>
				</div>
			{/each}
		</details>
	{/each}
</Modal>

<div class="box">
	<h2>🦀 the debug box 🦀</h2>
	<p>
		hi hello you beautiful dawg, welcome to the debug box 🦀
		{logos.length} logos
		{splash_texts_count} splash texts
	</p>
	<button on:click={() => modal('logos').show()}>show logos</button>
	<button on:click={() => modal('splash-texts').show()}>show splash texts</button>
	<Menu/>
</div>