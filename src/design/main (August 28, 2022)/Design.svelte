<script>
	import './design.css';

	import socials from 'lib/socials';

	let note = localStorage.discord_note ?? '';

	const setNote = () => localStorage.discord_note = note;
</script>

<div class="discolul">
	<div class="profilethingy">
		<img style="border-radius:50%" src="/img/logo/nico old aye.png" width="100" height="auto">
		<div class="nametag">
			<span class="username">macimas</span><span class="discriminator">#4393</span>
		</div>
	</div>
	<hr color="#101010">
	<h1>ABOUT ME</h1>
	<p>
		16 year old who's interested in programming, drawing, and japanese music (weeb)

		for more info, go to my terrible website
		<a href>https://macimas.github.io/</a>
	</p>
	<h1>NOTES</h1>
	<textarea bind:value={note} on:change={setNote} placeholder="Click to add a note"/>
	<hr color="#101010">
	<div class="socials">
		{#each socials as social}
			<a href={social.url}><img class="bruh" src="/img/icon/{social.label}.svg"></a>
		{/each}
	</div>
</div>