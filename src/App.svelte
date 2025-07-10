<script>
	import { fade } from "svelte/transition";
	import { cubicIn } from "svelte/easing";
	import { scale } from "libs/transitions.js";

	import { getCurrentDesign } from "libs/designs.js";

	import "./App.css";

	const design = getCurrentDesign();
</script>



{#snippet style()}
	<style>
		.splash-screen-container,
		.splash-screen {
			z-index: 4393;

			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;

			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;

			color: white;
			background: black;

			font-family: "Minecraft";

			text-align: center;
		}

		.splash-screen-container {
			overflow: hidden;
		}

		.splash-screen img {
			margin-bottom: 16px;

			opacity: 90%;
		}

		.splash-screen p {
			margin: 6px;
		}
	</style>
{/snippet}

{#snippet wait()}
	{@render style()}

	<div class="splash-screen-container" out:fade={{ easing: cubicIn }}>
		<div class="splash-screen" out:scale>
			<img src="/src/assets/wait.png">
			<p>please standby!!!</p>
			<p>am imcompentently loading stuff!!!</p>
		</div>
	</div>
{/snippet}

{#snippet ohno()}
	{@render style()}

	<div class="splash-screen-container">
		<div class="splash-screen">
			<img src="/src/assets/ohno.png">
			<p>what is that</p>
			<p>i dont know that</p>
			<p>what are you doing</p>
		</div>
	</div>
{/snippet}


{#await design}

{:then design}
	{#if design}
		{@const App = design.default} 
		<App/>
	{:else}
		{@render ohno()}
	{/if}
{/await}