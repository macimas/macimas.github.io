let splashTexts = {
	halloween: [
		"happy halloween",
		"merry halloween and have a happy christmas",
		"pumpkin disaster"
	],
	christmas: [
		"merry christmas",
		"merry christmas and have a happy new year",
		"happy christmas and have a merry new year"
	],
	birthday: [
		"happy birthday, me!",
		"today is my birthday!",
		"i am now one year older!"
	],
	default: [
		"the one",
		"the two",
		"the three"
	]
}

function getRandomItem(array) {
	return array[Math.floor(Math.random() * array.length)]
}

export function* generateSplashText() {
	if (false) yield getRandomItem(splashTexts.halloween)
	if (false) yield getRandomItem(splashTexts.christmas)
	if (false) yield getRandomItem(splashTexts.birthday)

	while (true) yield getRandomItem(splashTexts.default)
}

setInterval(() => { mdtCount.innerText = generateSplashText().next().value }, 900)