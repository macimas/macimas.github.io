<script>
	import './design.css';

	import socials from 'lib/socials.json';
</script>

<header>
	<code>
		howdy
	</code>
</header>

<main>
	<div id="content">
		<h1>macimas</h1>
		<p>a french flag up to no good :p</p>
		<p>i work primary in JavaScripts. daz bout it. yea</p>
		<p>check out my projects page and my blog!</p>
		<h2>socials</h2>
		<ul>
			{#each socials as social}
				<li>
					<a href={social.url}>{social.label}</a>
				</li>
			{/each}
		</ul>

		<p class="colored-block">
			<em>
				like the design? <a href="https://analog-hors.github.io/site/home/">check out Analog Hors' website!</a>
			</em>
		</p>
	</div>
</main>