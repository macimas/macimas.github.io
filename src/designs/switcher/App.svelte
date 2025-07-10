<script>
	import { designs } from "libs/designs.js";

	import "./App.css";
</script>


<svelte:head>
	<title>it's switching time</title>
	<link rel="icon" href="./img/bread.png">
</svelte:head>


<p>
	sorry i am too lazy to polish this page, check back in 16 decades
</p>

{#each Object.entries(designs) as [name, data]}
<a href="?🎨={name}">
	<button>
		{name}
	</button>
</a>
{/each}