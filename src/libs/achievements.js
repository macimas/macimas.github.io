console.log("🏆 achievements");


export const achievements = {
	"all_logos": {
		name: "Bad Logo",
		info: "see every random logo"
	},
	
	"all_quotes": {
		name: "Carousel of Text",
		info: "see every random quote"
	},
	
	"over_9000": {
		name: "It's Over 9000!",
		info: "click logo or quote 9001 times"
	},

	"all_designs": {
		name: "Internet Explorer",
		info: "visit every design"
	},

	"rock": {
		name: "You Rock!",
		info: "defeat macimas with rocks"
	}
}


export function grantAchivement(id) {
	const achievement = achievements[id];

	if (!achievement) {
		throw `"${id}" does not exist`;
	}

	let save_data = localStorage.achievements || {};

	if (typeof save_data == "string") {
		save_data = JSON.parse(save_data);
	}

	save_data[id] = Date.now();

	localStorage.achievements = JSON.stringify(save_data);

	return true;
}


window.debug.achievements = {
	list: achievements,
	grantAchivement
};