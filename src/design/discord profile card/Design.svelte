<script>
	import './design.css';

	import { marked } from 'marked';

	let avatar_image = "/img/logo/OLDUCT - みずたま feat. 歌愛ユキ ̶&̶ ̶初̶音̶ミ̶ク̶.png";
	let display_name = "macimas";
	let username = "macimas";
	let pronouns = "feel free and open source to use any!";
	let status = "⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛ ⬛⬛⬜⬛⬜⬛⬛⬛⬜⬜⬛⬛⬛⬜⬜⬛ ⬛⬜⬛⬜⬛⬜⬛⬜⬛⬛⬜⬛⬜⬛⬛⬛ ⬛⬜⬛⬜⬛⬜⬛⬜⬛⬛⬜⬛⬜⬛⬛⬛ ⬛⬜⬛⬛⬛⬜⬛⬛⬜⬜⬜⬛⬛⬜⬜⬛ ⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛ does it render properly?"
	let about_me = "16 year old who's interested in programming, drawing, and japanese music (weeb)\n\nfor more info, go to my terrible website\nhttps://macimas.github.io/";
	let note = localStorage.discord_note ?? '';

	const setNote = () => localStorage.discord_note = note;
</script>

<main class="profile-card">
	<div class="banner">

	</div>

	<div class="avatar">
		<img src={avatar_image}>
	</div>

	<div class="badges">
		<img src="https://cdn.discordapp.com/badge-icons/6de6d34650760ba5551a79732e98ed60.png">
	</div>

	<div class="contents">
		<h1 class="display-name white">{display_name}</h1>
		<div class="username white">{username}</div>
		<div class="pronouns">{pronouns}</div>
		<div class="status pad-top">{status}</div>

		<hr>

		<h2 class="white">ABOUT ME</h2>
		<p>{@html marked.parseInline(about_me)}</p>

		<h2 class="pad-top white">NOTE</h2>
		<textarea class="no-resize" bind:value={note} on:change={setNote} placeholder="Click to add a note"/>
	</div>
</main>

<div>
	display_name
	<input bind:value={display_name}>

	<hr>

	username
	<input bind:value={username}>

	<hr>

	pronouns
	<input bind:value={pronouns}>

	<hr>

	status <small>{status.length}/128</small>
	<textarea maxlength="128" bind:value={status}/>

	<hr>

	about_me <small>{about_me.length}/190</small>
	<textarea maxlength="190" bind:value={about_me}/>

	<hr>

	i'll improve this when im not lazy 👍
</div>