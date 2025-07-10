console.log("🖼️ logos");


import { getRandomIndex } from "libs/utils.js";

import { time } from "libs/specials.js";


export const logos = (() => {
	const logos = {
		primary: [],
		count: [],
		timed: []
	};

	const data = import.meta.glob("assets/logo/*/*", {
		eager: true,
		query: "?no-inline",
		import: "default"
	});

	for (const [path, url] of Object.entries(data)) {
		const [sub, name] = path.split("/").slice(4);

		if (name.startsWith("!!!")) {
			continue;
		}

		const img = new Image();
		img.src = url;

		logos[sub].push({ name, url, img });
	}

	return logos;
})();


const timed_logos = [
	{
		logo: "rickroll.png",
		condition: time.is_april_fools
	},
	{
		logo: "wysi.svg",
		condition: time.is_727
	},
	{
		logo: "macimas birthday.svg",
		condition: time.is_birthday
	},
	{
		logo: "macimas october.svg",
		condition: time.month == "october"
	},
	{
		logo: "macimas december.svg",
		condition: time.month == "december"
	}
];

const count_logos = [
	{
		logo: "nice.svg",
		count: 69
	},
	{
		logo: "stanley.svg",
		count: 427
	},
	{
		logo: "wysi.svg",
		count: 727
	},

	// pi logos. stolen from QmelZ the Void
	...(() => {
		const string = Math.PI
			.toString()
			.replace(".", "");

		const pies = Array.from(
			{ length: string.length },
			(_, i) => string.slice(0, -i)
		);

		const pi_logos = [];

		for (const pi of pies) {
			if (pi.length < 3) {
				continue;
			}

			pi_logos.push({
				logo: "pi.svg",
				count: parseInt(pi)
			});
		}

		return pi_logos;
	})()
];


export function createLogos() {
	const obj = $state({
		current: null,
		count: 0
	});

	let pool = [];

	function fillPool() {
		pool = [...logos.primary];

		const timed_logo = getTimedLogo();

		if (timed_logo) {
			pool.push(timed_logo);
		}

		pool.sort(() => Math.random() - 0.5);
	}

	function setLogo(logo) {
		obj.current = logo;
	}

	function getLogo(name, type = null) {
		let logo = null;

		const search = (item) => (item.name == name);
		
		if (type) {
			const index = logos[type]?.findIndex(search);

			if (index == -1) {
				throw `"${type}/${name}" does not exist`;
			}

			logo = logos[type][index];
		}
		
		if (!type) {
			const index = pool.findIndex(search);

			if (index == -1) {
				console.trace(`"${name}" does not exist`);
			}

			logo = pool.splice(index, 1)[0];
		}

		return (logo);
	}

	function getMainLogo() {
		const logo = getLogo("macimas gradient.svg");

		return (logo);
	}

	function getNextLogo() {
		if (!pool.length) {
			fillPool();

			return (getMainLogo());
		}

		return (pool.shift());
	}

	function getCountLogo() {
		for (const count of count_logos) {
			if (count.count == obj.count) {
				return (getLogo(count.logo, "count"));
			}
		}
	}

	function getTimedLogo() {
		for (const timed of timed_logos) {
			if (timed.condition) {
				return (getLogo(timed.logo, "timed"));
			}
		}
	}

	obj.update = (count) => {
		if (typeof count == "number") {
			obj.count = count;
		}
		else {
			obj.count++;
		}

		setLogo(getCountLogo() || getNextLogo());
	}

	fillPool();
	setLogo(getTimedLogo() || getMainLogo());

	window.debug.logos = {
		obj,
		fillPool,
		setLogo,
		getLogo,
		getMainLogo,
		getNextLogo,
		getCountLogo,
		getTimedLogo
	};

	return (obj);
}