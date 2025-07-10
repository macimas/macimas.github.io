<script>
	import links from "bits/links.json";
</script>


<p>here's a rough list:</p>

<div class="list">
	{#each links as item}
		<div class="item thick">
			<h2>{item.prefix} {item.name}</h2>

			{#each item.items as item}
				<p>
					<b>
						{#if item.link}
							<a href={item.link} target="_blank">{item.name}</a>
						{:else}
							<span>{item.name}</span>
						{/if}
					</b>

					<br>

					{#if item.text}
						<small>
							{item.text.join("\n")}
						</small>
					{/if}
				</p>
				{/each}
		</div>
	{/each}
</div>