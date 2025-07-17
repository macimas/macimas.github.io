import { marked } from "marked";

export function getRandomItem(array) {
	return (array[Math.floor(Math.random() * array.length)]);
}

export function getRandomIndex(array) {
	return (Math.floor(Math.random() * array.length));
}

export function parseText(text, deliminator = "\n"): string {
	if (Array.isArray(text)) {
		text = text.join(deliminator);
	}
	
	return marked.parseInline(text, {
		async: false
	});
}