<script>
	import Box from "lib/Box.svelte";
	import Modal from "lib/Modal.svelte";
	import ProjectGallary from "./section/ProjectGallary.svelte";
	import DuoDuo from "./section/DuoDuo.svelte";
	import StuffIPirated from "./section/StuffIPirated.svelte";
	import Debug from "./section/Debug.svelte";

	import logos from "./json/logos.json";
	import splashTexts from "./json/splash texts.json";

	// stolen from QmelZ the Void
	const piString = Math.PI.toString().replace('.', '');
	const piNumbers = Array.from({ length: piString.length }, (_, i) => piString.slice(0, -i))
		.filter(it => it.length > 2)
		.map(it => Number.parseInt(it));

	let showDebug = false;

	let clickCount = 0;
	let logo = "macimas.svg";
	let splashText;

	function clikylogo() {
		clickCount++;
		switch (clickCount) {
			case 69: logo = "nice.svg"; break;
			case 404: logo = "404.svg"; break;
			case 427: logo = "THE END IS NEVER.svg"; break;
			case 727: logo = "eyes.svg"; break;
			case 1928: logo = "cube.svg"; break;
			default: logo = logos[getRandomInt(logos.length)];
		}

		if (piNumbers.includes(clickCount)) logo = "π.svg"; // :shrug: :P
	}

	function changeSplashText() {
		splashText = splashTexts['default'][getRandomInt(splashTexts['default'].length)]
	}

	// i stole this >:D
	function getRandomInt(max) {
		return Math.floor(Math.random() * max)
	}

	changeSplashText();
</script>

<main>
	{#if clickCount !== 0}
		<p class="mdt-count">{clickCount}</p>
	{/if}
	<div class="macimas">
		<div class="logo clickMe" title={logo} on:click={clikylogo}>
			<img src={`./img/logo/${logo}`}>
		</div>
		<p class="splash-text clickMe" on:click={changeSplashText}>
			<code>{@html splashText}</code>
		</p>
		<div class="socials">
			<a class="no-underline" href="https://discord.gg/8V3ch7M"><img src="./img/icon/discord.svg"></a>
			<a class="no-underline" href="https://twitter.com/macdowntwo"><img src="./img/icon/twitter.svg"></a>
			<a class="no-underline" href="https://github.com/macimas"><img src="./img/icon/github.svg"></a>
			<a class="no-underline" href="https://onlyfans.com/mdtwo"><img src="./img/icon/onlyfans.svg"></a>
			<a class="no-underline" href="https://www.youtube.com/@mdt2"><img src="./img/icon/youtube.svg"></a>
			<a class="no-underline" href="https://www.reddit.com/user/ZkyLB/"><img src="./img/icon/reddit.svg"></a>
		</div>
	</div>

	<div class="sections">
		<Box>
			<h1>🇫🇷 what am i</h1>
			<p>am a 16 introverted boy in the philippines 🇵🇭 who does random shit</p>
		</Box>

		<Box>
			<h1>❓ what i do</h1>
			<p>
				1. i play minecraft<br>
				2. i like to work with vectors and designing ui, logos, n stuff<br>
				3. i sometimes do javascript<br>
				4. i pirate games and other stuff <small><i>(don’t tell anyone)</i></small>
			</p>
		</Box>

		<ProjectGallary/>

		<DuoDuo/>

		<StuffIPirated/>

		<button class="egg" on:click={() => showDebug = !showDebug}>{(showDebug) ? "hide" : "show"} debug box</button>

		{#if showDebug}
			<Debug/>
		{/if}
	</div>

	<footer class="width-fill-available">
		<img src="./img/made with love & svelte.png">
		last updated on March 20, 2023
	</footer>
</main>