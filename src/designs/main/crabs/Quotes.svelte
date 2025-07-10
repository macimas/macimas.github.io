<script>
	import { quotes, parseQuote } from "libs/quotes.svelte.js";

	import { addModal } from "@/Modals.svelte";

	const list = [
		{
			name: "zesty's site",
			text: [
				"https://celery.eu.org/phrases.txt"
			]
		},
		{
			name: "whatthecommit.com",
			text: [
				"https://github.com/ngerakines/commitment"
			]
		},
		{
			name: "ifrit's site",
			text: [
				"https://ifritdiezel.neocities.org"
			]
		},
		{
			name: "people's Discord messages",
		},
		{
			name: "ramen guy",
			text: [
				"https://ramen-guy.neocities.org"
			]
		},
		{
			name: "Cookie Clicker",
			text: [
				"https://cookieclicker.wiki.gg/wiki/News_Ticker#Quotes_and_News_Reports"
			]
		},
		{
			name: "Oracle Turret",
			text: [
				"https://theportalwiki.com/wiki/Oracle_Turret_voice_lines"
			]
		},
		{
			name: "Cave Johnson",
			text: [
				"https://theportalwiki.com/wiki/Cave_Johnson_voice_lines"
			]
		},
		{
			name: "YellowAfterLife",
			text: [
				"https://yal.cc"
			]
		},
		{
			name: "LateNightCommits",
			text: [
				"https://latenightcommits.com"
			]
		},
		{
			name: "me!"
		},
		{
			name: "among other things..."
		}
	]
</script>


{#snippet quoteInfo(quote)}
	<div class="quote item">
		<code>{@html quote.text}</code>
	</div>

	{@html quote.info}
{/snippet}


<div class="box">
	<p>
		quotes are yoinked from several sources
		<br>
		here's a rough list:
	</p>

	<div class="list">
		{#each list as item}
			<div class="item">
				<b>{item.name}</b>

				{#if item.text}
					<small>
						{@html item.text}
					</small>
				{/if}
			</div>
		{/each}
	</div>

<p>
	some quotes have additional credit which are currently formatted as html comments
	<br>
	might make it easier someday to see credit
</p>
</div>


<div class="list">
	{#each Object.entries(quotes) as [name, type]}
		<details open>
			<summary>
				<h2>
					{name}

					<span style="float:right">
						({Object.values(type).flat().length})
					</span>
				</h2>
			</summary>

			<div class="list">
				{#each Object.entries(type) as [name, subtype]}
					<details open>
						<summary>
							<h3>
								{name}

								<span style="float:right">
									({subtype.length})
								</span>
							</h3>
						</summary>

						<div class="list">
							{#each subtype as data}
							{@const quote = parseQuote(data)}
								<div class="item quote">

									<p>
										<code>{@html quote.text}</code>
									</p>

									{#if quote.info}
										<button onclick={() => addModal({ snippet: quoteInfo, data: quote, size: "medium" })}>
											(?)
										</button>
									{/if}
								</div>
							{/each}
						</div>
					</details>
				{/each}
			</div>
		</details>
	{/each}
</div>