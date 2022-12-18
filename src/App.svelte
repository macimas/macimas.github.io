<script>
	import { onMount } from 'svelte';
	import logos from "./logos.json";
	import splashTexts from "./splash texts.json";

	onMount(() => {
		if (navigator.userAgent.includes('Firefox'))
			mdtCount.innerText = "this website in firefox may be jank. sorry idk how to fix"
	})

	// i stole this >:D
	function getRandomInt(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min) + min);
	}


	let clickCount = 0;
	let currentLogo = "/logo/logo.svg";

	function changeLogo() {
		currentLogo = "/logo/loading logo.svg";
		clickCount++;
		mdtCount.innerText = clickCount;
		switch (clickCount) {
			case 69: currentLogo = "/logo/nice.svg"; break;
			case 727: currentLogo = "/logo/eyes.svg"; break;
			case 1928: currentLogo = "/logo/cube.svg"; break;
			default: currentLogo = "/logo/" + logos[getRandomInt(0, logos.length)]
		}
	}


	let currentSplashText = getRandomInt(0, splashTexts.length);

	function changeSplashText() {
		currentSplashText = getRandomInt(0, splashTexts.length)
	}
</script>


<main>
	<p id="mdtCount" style="position:absolute;top:32px;left:50%;transform:translateX(-50%)"></p>
	<mdt-macimas>
		<mdt-logo class="clickMe" on:click={changeLogo}>
			<img on:load src={currentLogo}>
		</mdt-logo>
		<splash-text on:click={changeSplashText} class="clickMe"><code>{splashTexts[currentSplashText]}</code></splash-text>
		<mdt-socials>
			<a href="https://discord.gg/8V3ch7M"><img src="/icon/discord.svg"></a>
			<a href="https://github.com/macimas"><img src="/icon/github.svg"></a>
			<a href="https://www.youtube.com/@mdt2"><img src="/icon/youtube.svg"></a>
			<a href="https://twitter.com/macdowntwo"><img src="/icon/twitter.svg"></a>
			<a href="https://www.reddit.com/user/ZkyLB/"><img src="/icon/reddit.svg"></a>
			<a href="https://onlyfans.com/mdtwo"><img src="/icon/onlyfans.svg"></a>
		</mdt-socials>
	</mdt-macimas>

	<b-x>
		<h1>🇫🇷 what am i</h1>
		<p>am a 16 introverted boy in the philippines 🇵🇭 who does random shit</p>
	</b-x>
	<b-x>
		<h1>❓ what i do</h1>
		<p>1. i play minecraft<br>
			2. i design ui, logos, and stuff<br>
			3. i sometimes do javascript<br>
			4. i pirate games and other stuff (don’t tell anyone)
		</p>
	</b-x>
	<b-x>
		<h1>⚙️ projects i do/helped with</h1>
		<table>
			<tr>
				<td>adocubes</td>
				<td><a href="http://adocubes.tk">adocubes.tk</a><br>
					<a href="https://github.com/ado1928/ado-cubes">github repo</a>
				</td>
				<td>contributed mostly to front-end, back-end a bit</td>
			</tr>
			<tr>
				<td>smiley face game</td>
				<td><a href="https://dev-smiley-face-game.sirjosh3917.com">game link</a><br>
					<a href="https://sfg.fandom.com/wiki/SFG_Wiki">wiki link</a>
				</td>
				<td>provided sprites for signs, creator of wiki</td>
			</tr>
			<tr>
				<td>bitter!mc</td>
				<td><a href="https://bittermc.github.io">bittermc.github.io</a></td>
				<td>a dead minecraft server</td>
			</tr>
			<tr>
				<td>this website</td>
				<td><a href="https://macimas.github.io">macimas.github.io</a></td>
				<td>recurssion</td>
			</tr>
		</table>
	</b-x>
	<b-x>
		<h1>💻 i own two laptops 💻</h1>
		<p>yes<br>here are their specs</p>
		<div style="display:flex;align-items:flex-start;flex-direction:row;margin:16px 0">
			<table>
				<tr>
					<td></td>
					<td><b>main</b></td>
				</tr>
				<tr>
					<td>Model</td>
					<td><a href="https://www.lenovo.com/in/en/inpartsales/laptops/lenovo/g-series/g500/">Lenovo G500</a></td>
				</tr>
				<tr>
					<td>CPU</td>
					<td>Intel Core i7-3540M</td>
				</tr>
				<tr>
					<td>GPU</td>
					<td>Intel HD Graphics 4000</td>
				</tr>
				<tr>
					<td>RAM</td>
					<td>2 × 4GB DDR3 1333MHz<br>
						<a href="https://www.amazon.com/Hynix-PC3-10600-DDR3-1333MHz-HMT351S6CFR8C-H9/dp/B00A802OYM">Hynix HMT351S6CFR8C-H9</a>
					</td>
				</tr>
				<tr>
					<td>Storage</td>
					<td>256 GB<br><a href="https://www.ramsta.com/p/25-Inch-ssd-256GB.html">Ramsta S800 SATA SSD</a></td>
				</tr>
				<tr>
					<td>OS</td>
					<td>EndeavourOS</td>
				</tr>
			</table>
			<table>
				<tr>
					<td></td>
					<td><b>secondary</b></td>
				</tr>
				<tr>
					<td>Model</td>
					<td><a href="https://dynabook.com/direct/pc-static/before2016/pc1/catalog/2012/r732g/spec.html">dynabook R732/g</a></td>
				</tr>
				<tr>
					<td>CPU</td>
					<td>Intel Core i3-3110M</td>
				</tr>
				<tr>
					<td>GPU</td>
					<td>Intel HD Graphics 4000</td>
				</tr>
				<tr>
					<td>RAM</td>
					<td>2 × 2 GB<br>
					Crucial(?)
				</td>
				</tr>
				<tr>
					<td>Storage</td>
					<td>160 GB<br>Samsung(?) SATA HDD</td>
				</tr>
				<tr>
					<td>OS</td>
					<td>EndeavourOS<br>Windows 8.1 (pirated)</td>
				</tr>
			</table>
		</div>
		<p>impressive, ain't they??</p>
	</b-x>
	<b-x>
		<h1>🏴‍☠️ stuff i pirated (don't kil me pls)</h1>
		<p>i have like <a href="https://www.xe.com/currencyconverter/convert/?Amount=2600&From=PHP&To=USD">₱2600</a> that i can't even use to buy stuff online. i don't want to anyways, for now
		<table style="margin-top:16px">
			<tr>
				<td>Minecraft</td>
				<td>infinite cube game. 10/10 would buy an mc account, but it's a bit too expensive, even if i can spend money</td>
				<td>not bought</td>
			</tr>
			<tr>
				<td>WorldBox</td>
				<td>very cool god game. 10/10 would buy someday</td>
				<td>not bought</td>
			</tr>
			<tr>
				<td>Mutilate-a-Doll 2</td>
				<td>besides killing a lot of dolls, i like making environments with it. 10/10 would buy</td>
				<td>not bought</td>
			<tr>
				<td>Terraria</td>
				<td>2d minecraft. 9/10 probably won't buy it nor play it again for a few years, but fun</td>
				<td>not bought</td>
			</tr>
		</table>
	</b-x>
	
	<footer>
		<code>made with <a href="https://svelte.dev">Svelte</a> <img src="/icon/svelte.svg"></code>
	</footer>
</main>