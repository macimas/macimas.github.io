<svelte:head>
	<base target="_blank">
</svelte:head>

<script>
	import './design.css';

	import ProjectGallary from './ProjectGallary.svelte';
	import DuoDuo from './DuoDuo.svelte';
	import StuffIPirated from './StuffIPirated.svelte';
	import DebugBox from './DebugBox.svelte';

	import Modal, { modal } from 'lib/Modal.svelte';
	import Menu from 'lib/Menu.svelte';
	import logos from 'lib/logos.json';
	import getSplashText from 'lib/splash texts.js';
	import socials from 'lib/socials.json';

	let logo = "macimas.svg";
	let splash_text = getSplashText();
	let click_count = 0;

	const getRandomInt = max => { return Math.floor(Math.random() * max) }

	// stolen from QmelZ the Void
	const piString = Math.PI.toString().replace('.', '');
	const piNumbers = Array.from({length: piString.length }, (_, i) => piString.slice(0, -i))
		.filter(it => it.length > 2)
		.map(it => Number.parseInt(it));

	function clikylogo() {
		click_count++;
		switch (click_count) {
			case 69: logo = "nice.svg"; break;
			case 404: logo = "404.svg"; break;
			case 427: logo = "THE END IS NEVER.svg"; break;
			case 727: logo = "eyes.svg"; break;
			case 1928: logo = "cube.svg"; break;
			default: logo = logos[getRandomInt(logos.length)];
		}

		if (piNumbers.includes(click_count)) logo = "π.svg"; // :shrug: :P
	}

	const konami = [
		'ArrowUp', 'ArrowUp',
		'ArrowDown', 'ArrowDown',
		'ArrowLeft', 'ArrowRight',
		'ArrowLeft', 'ArrowRight',
		'KeyB', 'KeyA'
	];
	let konami_index = 0;
	let show_debug_box = false;
	let footer_aftermessage = ':(';

	function keyHandly(event) {
		switch (event.code) {
			case konami[konami_index]:
				if (show_debug_box) return;
				konami_index++;
				if (konami_index == 10) {
					show_debug_box = !show_debug_box;
					konami_index = 0;
				}
				break;

			case 'F1':
				event.preventDefault();
				modal('no-help-available').show();
				break;
				
			default:
				konami_index = 0
		}
	}

	function acceptDefeat() {
		show_debug_box = true;
		footer_aftermessage = 'tricked ya >:D';
	}

	const socials_colors = {
		discord: "#a1b8ff",
		twitter: "#a1b8ff",
		github: "#dedfe6",
		onlyfans: "#dedfe6",
		youtube: "#ff9487",
		reddit: "#ff9487"
	}
</script>

<svelte:window on:keydown={keyHandly}/>

<Modal id="no-help-available">
	<h2>no help available</h2>
	<p>so leave me alone</p>
	<div>
		<button on:click={() => modal('no-help-available').hide()}>OK</button>
		<button>Help</button>
	</div>
</Modal>

<main>
	{#if click_count}
		<p class="click-count">{click_count}</p>
	{/if}

	<header>
		<div class="logo clickity" on:click={clikylogo}>
			<img src="/img/logo/{logo}">
		</div>

		<div class="splash-text clickity" on:click={() => splash_text = getSplashText()}>
			<p><code>{@html splash_text}</code></p>
		</div>
	</header>

	<span class="socials">
		{#each socials as social}
			<a class="clickity" style={`color:${socials_colors[social.label]}`} href={social.url}>
				<img src="/img/icon/{social.label}.svg">
				<br>
				<span>{social.label}</span>
			</a>
		{/each}
	</span>

	<div class="box">
		<h2>🇫🇷 what am i</h2>
		<p>
			am a 17 introverted boy in the philippines 🇵🇭 who does random shit
		</p>
	</div>

	<div class="box">
		<h2>❓ what i do</h2>
		<p>
			1. i play minecraft
			2. i like to work with vectors, designing ui, logos, n stuff
			3. i sometimes do javascript
			4. i sometimes draw stuff
			5. i pirate games and other stuff <small><i>(don’t tell anyone)</i></small>
		</p>
	</div>

	<ProjectGallary/>

	<DuoDuo/>

	<StuffIPirated/>

	{#if show_debug_box}
		<DebugBox/>
	{/if}

	<footer>
		<p>
			{#if !show_debug_box}
				want to open 🦀 the debug box 🦀?
				then you must complete my challange!!

				<span style={`font-size:calc(16px + (${konami_index}px * 3))`}>↑ ↑ ↓ ↓ ← → ← → B A</span>

				are you stumped?!!?!?! accept defeat noew!!!1!111
				<small>to accept defeat, please <a on:click={acceptDefeat}>click this link</a> to confirm</small>
			{:else}
				{footer_aftermessage}
			{/if}
		</p>
	</footer>
</main>