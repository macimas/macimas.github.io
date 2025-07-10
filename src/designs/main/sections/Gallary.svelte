<script>
	import gallary from "bits/gallary.json";
</script>


<p>
	"typo!!!" haha yes that's very intentional :)
</p>

<p>
	anyway here's stuff i made, and stuff i contributed to i guess...
</p>

<div class="list flat">
	{#each gallary as category}
		<details open>
			<summary>
				<h2>
					{category.name}
				</h2>
			</summary>

			<div class="list">
				{#each category.items as item}
					<div class="item">
						<img src={"/img/project/" + (item.image || "ohno.png")} style="width:fit-content">

						<b>{item.name}</b>

						<small>
							{item.text.join("\n")}
						</small>

						<div class="list">
							{#each Object.entries(item.links) as [name, link]}
								<a class="button" href={link} target="_blank">
									{name}
								</a>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</details>
	{/each}
</div>