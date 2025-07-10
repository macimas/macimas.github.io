<script>
	import "./App.less";

	import { createQuotes } from "libs/quotes.svelte.js";

	import icon from "./icon.png";

	const quotes = createQuotes();
</script>


<svelte:head>
	<title>macimasta</title>
</svelte:head>


{#each [...Array(6).keys()] as i}
	<div class="square n{i + 1}"></div>
{/each}

<main>
	<br>

	<img src={icon} width="100">

	<h1>macimasta</h1>

	<p onclick={quotes.update}>
		<i>
			{@html quotes.current.text}
		</i>
	</p>

	<p>
		<a href=""><b>home</b></a>
		|
		<a href="">about me</a>
		|
		<a href="">credits</a>
		|
		<a href="">my projects</a>
		|
		<a href="">contact me</a>
		|
		<a href="">cool stuff</a>
	</p>

	<p>
		hey. welcome to my website! check my links, steal my badges, click the splash text above: make yourself at home!
	</p>

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

	<br>
</main>