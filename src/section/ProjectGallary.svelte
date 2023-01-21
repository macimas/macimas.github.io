<script>
	import Box from "../Box.svelte";
	import projects from "../json/project gallary.json";
	
	let index = 0;
	$: project = projects[index];

	function addIndex() { if (projects[index + 1] !== undefined) index++ }
	function subIndex() { if (projects[index - 1] !== undefined) index-- }
	function getProjectName(i) {
		if (projects[i] == undefined) return ''
		return projects[i].name
	}
</script>

<Box>
	<h1>⚙️ projects i do/helped with</h1>
	<div class="width-fill-available project-nav">
		<span>
			<button on:click={subIndex}>&lt;-</button>
			<p>{getProjectName(index - 1)}</p>
		</span>
		<b class="project-title">{project.name}</b>
		<span>
			<p>{getProjectName(index + 1)}</p>
			<button on:click={addIndex}>-&gt;</button>
		</span>
	</div>
	<div class="project">
		<img src={"/project/" + project.img}>
		<div class="width-fill-available" style="display:flex;flex-direction:column;justify-content:space-between;">
			<div>
				{#each project.info as text} {text}<br> {/each}
			</div>
			<div class="width-fill-available" style="display:flex;justify-content:flex-end;gap:16px">
				{#each project.links as link} <a href={link[1]}>{link[0]}</a> {/each}
			</div>
		</div>
	</div>
</Box>