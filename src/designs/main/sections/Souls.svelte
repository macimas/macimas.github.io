<script>
	import souls from "bits/souls.json";

	let show_all = $state(false);

	function toggle() {
		show_all = !show_all;
	}
</script>


<p>
	stuff are ordered by roughly how much i like them, how often i watch/listen to them, and among other factors
</p>

<p>
	you can probably tell i like music people
</p>

<div class="list">
	<div class="item">
		<p>🎨 = creative in general</p>
		<p>🎵 = music</p>
		<p>✏️ = drawing</p>
		<p>💻️ = programming</p>
		<p>💽 = technology</p>
	</div>
	<div class="item">
		<p>🎓️ = educational</p>
		<p>⚛️ = science</p>
		<p>📖 = narrative/story</p>
		<p>🎭️ = funny</p>
		<p>🎮️ = gaming</p>
	</div>
	<div class="item">
		<p>👥 = group/band</p>
		<p>🪦 = defunct/abandoned</p>
	</div>
</div>

<div class="list">
	{#each souls as item, i}
		{#if (i < 32) || show_all}
			<div class="item">
				<div>
					{#each item.tags as tag}
						<span>
							{tag}
						</span>
					{/each}
				</div>

				<p>
					<b>
						{item.name}
					</b>

					<small>
						({i + 1})
					</small>

					<br>

					{#if item.links}
						<span>
							{#each Object.entries(item.links) as [name, link]}
								<small>
									<a href={link} target="_blank">
										{name}
									</a>
								</small>
								<br>
							{/each}
						</span>
					{/if}
				</p>


				{#if item.text}
					<small>
						{item.text.join("\n")}
						<br>
					</small>
				{/if}
			</div>
		{/if}
	{/each}
</div>

<div class="list">
	<button onclick={toggle}>
		{#if show_all == false}
			🌊 show all {souls.length} items
		{:else}
			🧂 reset items
		{/if}
	</button>
</div>