<script>
	import { createQuotes } from "libs/quotes.svelte.js";
	import { parseText } from "libs/utils.ts";

	const quotes = createQuotes();

	function main(canvas) {
		const ctx = canvas.getContext("2d");

		function rect(color) {
			ctx.fillStyle = color;
			ctx.fillRect(
				~~(Math.random() * window.innerWidth),
				~~(Math.random() * window.innerHeight),
				~~(Math.random() * window.innerWidth),
				~~(Math.random() * window.innerHeight)
			);
		}

		function draw() {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;

			//ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

			if (~~(Math.random() * 2)) {
				rect("red");
				rect("blue");
			}
			else {
				rect("blue");
				rect("red");
			}

			quotes.update();
		}

		setInterval(draw, 800);
	}
</script>

<style>
	:global(body) {
		overflow: hidden;
		margin: 0;
	}

	p {
		position: absolute;
		bottom: 100px;
		left: 16px;
	}
</style>

<canvas {@attach main}/>

<p>
	{@html quotes.current.text}
</p>