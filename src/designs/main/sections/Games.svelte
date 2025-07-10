<script>
	import games from "bits/games.json";
</script>


<p>i've played and pirated nyehehehar!!!! >:3</p>

<p>also i added roughly when i download for first timey</p>

<small>
	p.s. if you pirate stuff (not just games) and like it,
	pls do consider supporting the people behind them by paying/donating whenever possible!
	...or at the very least spread the word! :)
</small>
<small>
	except Adobe. it is always morally correct to pirate Adobe software. >:)
</small>

<div class="list">
	<div class="item">
		<p>💵 = is paid</p>
		<p>📦️ = is free</p>
	</div>
	<div class="item">
		<p>🪙 = has microtransactions</p>
		<p>🪲 = has advertisements</p>
	</div>
	<div class="item">
		<p>🏴‍☠️ = i pirated this</p>
		<p>💸 = i paid for this</p>
	</div>
</div>

<div class="list">
	{#each games as item}
		<div class="item">
			<div>
				{#each item.tags as tag}
					<span>
						{tag}
					</span>
				{/each}
			</div>
			

			<p>
				<b>{item.name}</b>
				
				<br>

				<small>
					{item.text.join("\n")}
				</small>
			</p>

			<p>
				{#each item.items as item}
					<small>
						<i><b>{item.name}</b> = {item.text}</i>
					</small>
					<br>
				{/each}
			</p>
		</div>
	{/each}
</div>