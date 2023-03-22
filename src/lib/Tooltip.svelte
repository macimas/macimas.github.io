<script>
	import { onMount } from 'svelte';

	export let title;
	export let x;
	export let y;

	let element;


</script>

<div bind:this={element} class="tooltip" style={`top: ${y + 16}px; left: ${x + 16}px`}>{title}</div>