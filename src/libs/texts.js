console.log("📰 texts");


export const texts = (() => {
	const texts = [];

	const data = import.meta.glob("../texts/*/main.md", {
		eager: true,
		query: "?raw&no-inline",
		import: "default"
	});

	for (const [path, value] of Object.entries(data)) {
		const [date, indent] = path.split("/")[2].split(" ", 1);

		texts.push({ date, name, value });
	}

	return (texts);
})();