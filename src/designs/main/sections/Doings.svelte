<script>
	import bits_doings from "bits/doings.json";

	import { addModal } from "../Modals.svelte";

	const doings = bits_doings
		.sort(() => Math.random() - 0.5);
</script>


{#snippet list(show)}
<div class="list">
	{#each doings as item, i}
	{#if (i < 10) || show}
		<div class="item">
			<p>
				<b>{i + 1}.</b>
				{@html item}
			</p>
		</div>
	{/if}
	{/each}
</div>
{/snippet}


<p>
	depraved thoughts and feelings, among other terrible things
</p>

{@render list(false)}

<div class="list">
	<button onclick={() => addModal({ snippet: list, data: true })}>
			🌊 show all {doings.length} items
	</button>
</div>