<script>
	import Box from "./Box.svelte";

	import logos from "./json/logos.json";

	import splashTexts from "./json/splash texts.json";

	import ProjectGallary from "./section/ProjectGallary.svelte";
	import DuoDuo from "./section/DuoDuo.svelte";
	import StuffIPirated from "./section/StuffIPirated.svelte";


	// i stole this >:D
	function getRandomInt(max) {
		return Math.floor(Math.random() * max)
	}



	let clickCount = 0;
	let currentLogo = "/logo/logo.svg";

	if (navigator.userAgent.match(/Android|iPhone|iPad|iPod/i) !== null) {
		clickCount = "website in mobile is very janky."
	}

	function setLogo(logo) { currentLogo = "/logo/" + logo }

	function clikylogo() {
		if (isNaN(clickCount)) clickCount = 0
		clickCount++;
		switch (clickCount) {
			case 69: setLogo("nice.svg"); break;
			case 404: setLogo("404.svg"); break;
			case 427: setLogo("THE END IS NEVER.svg"); break;
			case 727: setLogo("eyes.svg"); break;
			case 1928: setLogo("cube.svg"); break;
			default: currentLogo = "/logo/" + logos[getRandomInt(logos.length)]
		}
	}



	let currentSplashText;

	function changeSplashText() {
		currentSplashText = getRandomInt(splashTexts['default'].length)
	}; changeSplashText()
</script>


<main>
	{#if clickCount !== 0}
		<p class="mdt-count">{clickCount}</p>
	{/if}
	<div class="macimas">
		<div class="logo clickMe" on:click={clikylogo}>
			<img src={currentLogo}>
		</div>
		<p class="splash-text clickMe" on:click={changeSplashText}><code>{splashTexts['default'][currentSplashText]}</code></p>
		<div class="socials">
			<a href="https://discord.gg/8V3ch7M"><img src="/icon/discord.svg"></a>
			<a href="https://twitter.com/macdowntwo"><img src="/icon/twitter.svg"></a>
			<a href="https://github.com/macimas"><img src="/icon/github.svg"></a>
			<a href="https://onlyfans.com/mdtwo"><img src="/icon/onlyfans.svg"></a>
			<a href="https://www.youtube.com/@mdt2"><img src="/icon/youtube.svg"></a>
			<a href="https://www.reddit.com/user/ZkyLB/"><img src="/icon/reddit.svg"></a>

		</div>
	</div>

	<Box>
		<h1>🇫🇷 what am i</h1>
		<p>am a 16 introverted boy in the philippines 🇵🇭 who does random shit</p>
	</Box>

	<Box>
		<h1>❓ what i do</h1>
		<p>
			1. i play minecraft<br>
			2. i design ui, logos, and stuff<br>
			3. i sometimes do javascript<br>
			4. i pirate games and other stuff (don’t tell anyone)
		</p>
	</Box>

	<ProjectGallary/>

	<DuoDuo/>

	<StuffIPirated/>
	
	<footer>
		<code>stupidly made with <a href="https://svelte.dev">Svelte</a> <img src="/icon/svelte.svg"></code>
	</footer>
</main>