<script>
	import { footers } from "libs/footers.svelte.js";
	import { parseText } from "libs/utils.js";
</script>


<div class="list">
	{#each Object.entries(footers) as [type, footers]}
		<details open>
			<summary>
				<h2>
					{type}
					<span style="float:right">
						<b>({footers.length})</b>
					</span>
				</h2>
			</summary>

			<div class="list">
				{#each footers as footer}
					<div class="item">
						<div class="footer">
							<img class="box" src={footer.url}>
						</div>
						
						<p><b>{footer.filename}</b></p>

						{#if footer.info}
							<p>{@html parseText(footer.info)}</p>
						{/if}
					</div>
				{/each}
			</div>
		</details>
	{/each}
</div>