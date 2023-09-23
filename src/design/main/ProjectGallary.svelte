<!--i know it's misspelled, shut up-->

<script>
	import projects from "lib/project gallary.json";

	// this is likely stupid
	let index = 0;
	$: project = projects[index];

	const addIndex = () => { if (projects[index + 1]) index++ };
	const subIndex = () => { if (projects[index - 1]) index-- };
	const getProjectName = (i) => { return (projects[i]) ? projects[i].name : undefined };
</script>

<div class="box">
	<h2>⚙️ projects i did/helped with</h2>
	<div class="project-gallary">
		<nav>
			<button disabled={!getProjectName(index - 1)} on:click={subIndex}>&lt;-</button>
			<p>{getProjectName(index - 1) ?? '❨'}</p>

			<b class="title">{project.name}</b>
			<span/>

			<p>{getProjectName(index + 1) ?? '❩'}</p>
			<button disabled={!getProjectName(index + 1)} on:click={addIndex}>-&gt;</button>
		</nav>

		<img src="/img/project/{project.img}">

		<p class="info">
			{#each project.info as text} {text}<br> {/each}
		</p>

		<div class="links">
			{#each project.links as link} <a href={link[1]}>{link[0]}</a> {/each}
		</div>
	</div>
</div>