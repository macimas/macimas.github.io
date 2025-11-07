import { MarkedOptions } from "marked";
import { marked } from "marked";

const MarkedOptions: MarkedOptions = {
	async: false,
	gfm: false,
	pedantic: true
}

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
	
	return marked.parseInline(text, MarkedOptions);
}

export function parse(text, deliminator = "\n"): string {
	if (Array.isArray(text)) {
		text = text.join(deliminator);
	}
	
	return marked.parse(text, MarkedOptions);
}