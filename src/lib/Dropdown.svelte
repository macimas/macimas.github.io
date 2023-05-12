<script>
	export let options = [];
	export let value = options[0];
</script>

<div>
	<div>
		{#if options.includes.value}{value}{/if}
	</div>
	<div>
		{#each options as option}
			<div role="option">{option}</div>
		{/each}
	</div>
</div>