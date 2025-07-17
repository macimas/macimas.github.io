<script>
	import "./App.less";

	import Modals, { addModal } from "./Modals.svelte";

	import Header from "./Header.svelte";
	import Footer from "./Footer.svelte";

	import About from "./sections/About.svelte";
	import Doings from "./sections/Doings.svelte";
	import Links from "./sections/Links.svelte";

	import Gallary from "./sections/Gallary.svelte";
	import Souls from "./sections/Souls.svelte";
	import Games from "./sections/Games.svelte";
	import Anime from "./sections/Anime.svelte";
	import Devices from "./sections/Devices.svelte";
	import Kudos from "./sections/Kudos.svelte";
	import Todo from "./sections/Todo.svelte";

	import titles from "./titles.json";

	import { getRandomItem } from "libs/utils.ts";

	const main_sections = [
		[About,  "🇫🇷 what am i 👤"      ],
		[Doings, "❓️ what i do 🤔"      ],
		[Links,  "🔗 links & socials 🌐"]
	];

	const secondary_sections = [
		[Gallary, "🖼️", "🖼️ project gallary 🥚"   ],
		[Souls,   "🗿", "🗿 souls i like/know ❤️" ],
		[Games,   "🎮️", "🎮️ games i've played 🏴‍☠️" ],
		[Anime,   "🇯🇵", "🗾 anime i've watched 😏"],
		[Devices, "💻️", "💻️ my old devices 📱"    ],
		[Kudos,   "🎉", "🎉 kudos"                ],
		[Todo,    "📝", "📝 todo stuff"           ]
	];
</script>


<svelte:head>
	<title>{getRandomItem(titles)}</title>
	<link rel="icon" href="./img/tricolor.png">
</svelte:head>


<Header/>

{#each main_sections as [Content, header]}
	<section class="box">
		<h1>{header}</h1>
		<Content/>
	</section>
{/each}

<section class="box">
	<h1>stuffy stuff things</h1>

	<p>info i guess</p>

	<div class="list">
		{#each secondary_sections as [component, icon, name]}
			<button onclick={() => addModal({ component, name })}>
				{name}
			</button>
		{/each}
	</div>
</section>

<Footer/>


<Modals/>