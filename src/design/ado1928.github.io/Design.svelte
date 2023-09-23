<script>
	import './design.css';

	import projects from 'lib/project gallary.json';
</script>

<main>
	<h1 class="ado">macimas</h1>

	<div class="projects">
		{#each projects as project}
			<div class="card">
				<img src="/img/project/{project.img}">
				<div class="block">
					<h2><a href={project.links[0][1]}>{project.name}</a></h2>
					<p>
						{#each project.info as text}
							{text}<br>
						{/each}
					</p>
				</div>
			</div>
		{/each}
	</div>
</main>