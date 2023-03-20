<script>
	import Box from "../Box.svelte";
	import projects from "../json/project gallary.json";
	
	let index = 0;
	$: project = projects[index];

	// this is likely stupid
	function addIndex() { if (projects[index + 1] !== undefined) index++ }
	function subIndex() { if (projects[index - 1] !== undefined) index-- }
	function getProjectName(i) {
		if (projects[i] == undefined) return '';
		return projects[i].name;
	}
</script>

<Box>
	<h1>⚙️ projects i do/helped with</h1>
	<div class="width-fill-available project-nav">
		<span>
			<button class="egg" on:click={subIndex}>&lt;-</button>
			<p>{getProjectName(index - 1)}</p>
		</span>
		<b class="project-title">{project.name}</b>
		<span>
			<p>{getProjectName(index + 1)}</p>
			<button class="egg" on:click={addIndex}>-&gt;</button>
		</span>
	</div>
	<div class="project">
		<img src={"./img/project/" + project.img}>
		<div class="project-info width-fill-available">
			<div>
				{#each project.info as text} {text}<br> {/each}
			</div>
			<div class="project-links width-fill-available">
				{#each project.links as link} <a href={link[1]}>{link[0]}</a> {/each}
			</div>
		</div>
	</div>
</Box>