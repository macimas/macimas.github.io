
console.log("🎨 designs");


export const designs = (() => {
	const designs = {};

	const data = import.meta.glob("../designs/*/App.svelte");

	for (const [path, value] of Object.entries(data)) {
		const name = path.split("/")[2];

		if (name.startsWith("!!!")) {
			continue;
		}

		designs[name] = {
			import: value
		};
	}

	return designs;
})();

export const all_designs = (() => {
	return Object.entries(designs)
		.map(([name, data]) => ({ name, ...data }));
})();


export function getCurrentDesign() {
	const params = new URLSearchParams(location.search);
	const name = params.get("🎨") || "main";
	const module = designs[name]?.import();

	return ({
		name,
		component: module
			? (async () => (await module)?.default)()
			: null
	});
}