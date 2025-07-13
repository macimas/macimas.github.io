<script>
	const contacts = [
		["discord", "@macimas"],
		["github", "macimas", "https://github.com/macimas"],
		["bluesky", "macimas", "https://macimas.bsky.social"],
		["tumblr", "macimas", "https://www.tumblr.com/macimas"],
		["email", "macimasta@gmail.com", "mailto:macimasta@gmail.com"]
	]
</script>

<h2>contacts</h2>

<ul>
	{#each contacts as [label, name, href]}
		<li>
			{label}: <a {href}>{name}</a>
		</li>
	{/each}
</ul>