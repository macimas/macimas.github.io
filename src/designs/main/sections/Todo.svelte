<script>
	import { parseText } from "libs/utils.js"

	const todos = [
		[
			"improve gallary section",
			"maybe make it more akin to old?"
		],
		[
			"add more primary logos",
			"-- Minecraft-styled macimas",
			"-- Samsung-styled macimas?",
			"-- Infinix-styled macimas?",
			"-- Lenovo-styled macimas?",
			"150 shall suffice"
		],
		[
			"add more primary footers",
			"50 footers shall suffice"
		],
		[
			"add timed and count footers?"
		],
		[
			"add more 🎨 designs",
			"-- [zesty's website](https://celery.eu.org)?",
			"-- [natalie's website](https://nat.is-a.dev)",
			"-- Youtube-styled website",
			"-- Android 11 cats generator"
		],
		[
			"achievements",
			"**Bad Logo** -- see every random logo",
			"**Carousel of Text** -- see every random quote",
			"**It's Over 9000!** -- click logo or quote 9001 times",
			"**Internet Explorer** -- visit every design",
			"**You rock!** -- defeat macimas with rocks"
		]
	];
</script>


<p>
	things i gotta think and do about. terrible stuff!
</p>

<div class="list">
	{#each todos as todo}
	<div class="item">
		<p>{@html parseText(todo)}</p>
	</div>
	{/each}
</div>