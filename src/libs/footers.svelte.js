console.log("🎞️ footers");


export const footers = (() => {
	const footers = {};
	const info = {};

	const data_footers = import.meta.glob(["assets/footer/*/*.*", "!**/*.md"], {
		eager: true,
		query: "?no-inline",
		import: "default"
	});

	const data_info = import.meta.glob(["assets/footer/*/*.md"], {
		eager: true,
		query: "?raw",
		import: "default"
	});

	function getStuff(path) {
		const [type, filename] = path.split("/").slice(4);
		const ext = "." + filename.split(".").at(-1);
		const name = filename.slice(0, ext.length * -1);

		return ([type, filename, name]);
	}

	for (const [path, data] of Object.entries(data_info)) {
		const [type, filename, name] = getStuff(path);

		if (!info[type]) {
			info[type] = {};
		}

		info[type][name] = data;
	}

	for (const [path, url] of Object.entries(data_footers)) {
		const [type, filename, name] = getStuff(path);

		if (filename.startsWith("!!!")) {
			continue;
		}
	
		if (!footers[type]) {
			footers[type] = [];
		}

		const data = {
			filename,
			url,
			img: new Image()
		};

		data.img.src = url;

		if (info[type][name]) {
			data.info = info[type][name];
		}

		footers[type].push(data);
	}

	return footers;
})();

console.log(footers);



export function createFooters() {
	const obj = $state({
		current: null,
		count: 0
	});

	let pool = [];

	function fillPool() {
		pool = [...footers.primary];

		pool.sort(() => Math.random() - 0.5);
	}

	function setFooter(footer) {
		obj.current = footer;
	}

	function getNextFooter() {
		if (!pool.length) {
			fillPool();
		}

		const footer = pool.shift();

		return (footer);
	}

	obj.update = (count) => {
		if (count) {
			obj.count = count;
		}
		else {
			obj.count++;
		}

		setFooter(getNextFooter());
	}

	fillPool();
	setFooter(getNextFooter());

	window.debug.footers = {
		obj,
		fillPool,
		setFooter,
		getNextFooter
	};

	return (obj);
}