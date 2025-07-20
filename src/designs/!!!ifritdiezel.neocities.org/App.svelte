<script>
	import "./App.less";

	import { router, link } from "./libs/router.svelte.js";
	import { createQuotes } from "libs/quotes.svelte.js";

	import Home from "./pages/Home.svelte";
	import About from "./pages/About.svelte";
	import Credits from "./pages/Credits.svelte";
	import Projects from "./pages/Projects.svelte";
	import Contacts from "./pages/Contacts.svelte";
	import CoolStuff from "./pages/CoolStuff.svelte";

	import icon from "./icon.png";

	const quotes = createQuotes();

	const routes = [
		{
			path: "/home",
			component: Home
		},
		{
			path: "/about",
			component: About
		},
		{
			path: "/credits",
			component: Credits
		},
		{
			path: "/projects",
			component: Projects
		},
		{
			path: "/contacts",
			component: Contacts
		},
		{
			path: "/coolstuff",
			component: CoolStuff
		}
	];

	const config = {
		base_path: "/home",
		routes
	};
</script>


<svelte:head>
	<title>macimasta</title>
</svelte:head>


{#each [...Array(6).keys()] as i}
	<div class="square n{i + 1}"></div>
{/each}

<main>
	<br>

	<header>
		<img src={icon} width="100">

		<h1>macimasta</h1>

		<p onclick={quotes.update}>
			<i>
				{@html quotes.current.text}
			</i>
		</p>
	</header>

	<nav>
		<p>
			<a use:link href="/home">home</a>
			|
			<a use:link href="/about">about me</a>
			|
			<a use:link href="/credits">credits</a>
			|
			<a use:link href="/projects">my projects</a>
			|
			<a use:link href="/contacts">contact me</a>
			|
			<a use:link href="/coolstuff">cool stuff</a>
		</p>
	</nav>

	<div {@attach router(config)}></div>

	<footer>
		<div>
			<img src="/img/buttons/1001freenewfontsbutton.gif">
			<img src="/img/buttons/neocities-2.gif">
			<img src="/img/buttons/webpassion.gif">
			<img src="/img/buttons/piracy.gif" title="i love piracy!!! 😍">
			<img src="/img/buttons/xp.gif" title="xp was really cool!&#10;it was the first OS i've ever used">
			<img src="/img/buttons/vivaldi.gif">
			<img src="/img/buttons/organizer.png" alt="organizer" title="organizer approved!">
			<img src="/img/buttons/paypalme30Kusd.png">
			<img src="/img/buttons/imhigh.gif">
		</div>
	</footer>

	<br>
</main>