console.log("💬 quotes");


import { getRandomIndex, parseText } from "libs/utils.ts";

import { time } from "libs/specials.js";

import _quotes from "bits/quotes.json";


export const quotes = _quotes;


const timed_quotes = [
	{
		quotes: quotes.timed.valentimes,
		condition: time.is_valentimes
	},
	{
		quotes: quotes.timed.april_fools,
		condition: time.is_april_fools
	},
	{
		quotes: quotes.timed.wysi,
		condition: time.is_727
	},
	{
		quotes: quotes.timed.birthday,
		condition: time.is_birthday
	},
	{
		quotes: quotes.timed.halloween,
		condition: time.is_halloween
	},
	{
		quotes: quotes.timed.christmas,
		condition: time.is_christmas
	}
];


export function parseQuote(quote) {
	if (typeof quote == "string" || Array.isArray(quote)) {
		quote = { text: quote };
	}

	quote.text = parseText(quote.text);

	if (quote.info) {
		quote.info = parseText(quote.info);
	}

	return (quote);
}


export function createQuotes() {
	const obj = $state({
		current: null,
		count: 0
	});

	let pool = [];

	function fillPool() {
		pool = [
			...Object.values(quotes.primary).flat(),
			...quotes.month[time.month],
			...getTimedQuotes()
		];

		pool.sort(() => Math.random() - 0.5);
	}

	function setQuote(quote) {
		obj.current = parseQuote(quote);
	}

	function getQuote(index, type, subtype) {
		let quote = null;

		if (type && !subtype) {
			throw "no subtype?";
		}

		if (type && subtype) {
			quote = quotes[type][subtype][index];

			if (!quote) {
				throw `"${type}/${subtype}/${index}" does not exist`;
			}
		}

		if (!type && !subtype) {
			quote = pool.splice(index, 1)[0];

			if (!quote) {
				throw `"${index}" does not exist`;
			}
		}

		return (quote);
	}

	function getNextQuote() {
		if (!pool.length) {
			fillPool();
		}

		const quote = pool.shift();

		return (quote);
	}

	function getTimedQuotes() {
		for (const timed of timed_quotes) {
			if (timed.condition) {
				return (timed.quotes);
			}
		}

		return ([]);
	}

	function getTimedQuote() {
		const quotes = getTimedQuotes();
		const index = getRandomIndex(quotes);
		const quote = quotes[index];

		return (quote);
	}

	obj.update = (count) => {
		if (typeof count == "number") {
			obj.count = count;
		}
		else {
			obj.count++;
		}

		setQuote(getNextQuote());
	}

	fillPool();
	setQuote(getTimedQuote() || getNextQuote());

	window.debug.quotes = {
		obj,
		fillPool,
		parseQuote,
		setQuote,
		getQuote,
		getNextQuote,
		getTimedQuotes,
		getTimedQuote
	};

	return (obj);
}