<script>
	import Modal from './Modal.svelte';
	import Menu from './Menu.svelte';

	function setDesign(design) {
		if (sessionStorage.design == design) {
			return alert(`you're already at ${design}, idiot`);
		};

		sessionStorage.design = design;
		history.go();
	}

	let structure = [];
	let layout = [
		"<h3>my website</h2>",
		[ "main" ],
		[ "discord profile card"],
		"<hr>",
		"<h3>parodies</h2>",
		[ "skybldev.eu.org" ],
		[ "qmelz.deno.dev" ],
		[ "yusof.top (old)" ],
		[ "ado1928.github.io" ],
		[ "analog-hors.github.io" ]
	];

	layout.forEach(thing => {
		if (typeof thing == 'string') {
			return structure.push(thing);
		}

		structure.push({
			icon: `design/${"oh fuck.png"}`,
			label: thing[0],
			run: () => setDesign(thing[1] ?? thing[0])
		});
	});
</script>

<Modal id="DesignSwitcher" containerclass="design-switcher">
	<h2>🇫🇷 the design switcher (very wip) 🥚</h2>
	<p>
		welcome to hell, bitch
		you are currently at <b>{localStorage.design}</b>
	</p>
	<Menu structure={structure}/>
</Modal>