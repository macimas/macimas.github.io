<script>
	import { logos } from "libs/logos.svelte.js";
</script>


<div class="list">
	{#each Object.entries(logos) as [type, logos]}
		<details open>
			<summary>
				<h2>
					{type}
					<span style="float:right">
						<b>({logos.length})</b>
					</span>
				</h2>
			</summary>

			<div class="list">
				{#each logos as logo}
					<div class="item">
						<div class="logo">
							<img src={logo.url}>
						</div>

						<p><b>{logo.name}</b></p>
					</div>
				{/each}
			</div>
		</details>
	{/each}
</div>