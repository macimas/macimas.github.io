import splash_texts from "./splash texts.json";

let splash_text_generator = splashTextGenerator();

function* splashTextGenerator() {
	if (false) yield getRandomItem(splash_texts.halloween);
	if (false) yield getRandomItem(splash_texts.christmas);
	if (false) yield getRandomItem(splash_texts.birthday);

	while (true) yield getRandomItem(splash_texts.default);
}

export default function getSplashText() {
	return splash_text_generator.next().value;
}

function getRandomItem(array) {
	return array[Math.floor(Math.random() * array.length)];
}