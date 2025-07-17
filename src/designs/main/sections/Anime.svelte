<script>
	import anime from "bits/anime.json";

	let show_all = $state(false);

	function toggle() {
		show_all = !show_all;
	}

	function getTagAmount(tag) {
		return anime.filter((it) => it.tags?.includes(tag)).length;
	}
</script>


<p>
	kinda incomplete and disorganized
	also some anime may be listed multiple times when i rewatch
</p>

<div class="list">
	<div class="item">
		<p>✅ = finished ({getTagAmount("✅")})</p>
		<p>▶️ = trying to finish ({getTagAmount("▶️")})</p>
		<p>❔ = unsure to finish ({getTagAmount("❔")})</p>
		<p>❌ = dropped ({getTagAmount("❌")})</p>
	</div>
	<div class="item">
		<p>🥚 = it's cool ({getTagAmount("🥚")})</p>
		<p>🛢️ = it's neat ({getTagAmount("🛢️")})</p>
		<p>🆗 = it's ok ({getTagAmount("🆗")})</p>
		<p>🫀 = it's meh ({getTagAmount("🫀")})</p>
	</div>
</div>



<div class="list">
	{#each anime as item, i}
		{#if i < 20 || show_all}
			<div class="item">
				<p>
					{#each item.tags as tag}
						<span>
							{tag}
						</span>
					{/each}

					{#if item.link}
						<small>
							<a href={item.link} target="_blank">(link)</a>
						</small>
					{/if}
				</p>

				<p>
					<b>{item.name}</b>

					<br>
					
					{#if item.text}
						<small>
							{item.text?.join("\n")}
						</small>
					{/if}
				</p>
			</div>
		{/if}
	{/each}
</div>

<div class="list">
	<button onclick={toggle}>
		{#if show_all == false}
			🌊 show {anime.length} items
		{:else}
			🧂 reset items
		{/if}
	</button>
</div>