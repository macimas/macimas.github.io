<script>
	export let structure = [
		{ icon: "svelte.svg", label: "option 1", run: () => alert('option 1') },
		{ icon: "discord.svg", label: "option 2", run: () => alert('option 2') },
		{ icon: "youtube.svg", label: "option 3", run: () => alert('option 3') }
	]
</script>

<div class="menu">
	{#each structure as shit}
		{#if typeof shit != 'object'}
			{@html shit}
		{:else}
			<div on:click={shit.run}>
				{#if shit.icon} <img src="/img/icon/{shit.icon}"> {/if}
				<span>{@html shit.label}</span>
			</div>
		{/if}
	{/each}
</div>