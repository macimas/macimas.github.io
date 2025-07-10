console.log("⏳ special");


import moment from "moment";


export const age = (() => {
	const age = moment().utcOffset("+0800")
		.diff("2006-09-11", "years", true);

	return ({
		brief: Math.floor(age),
		decimal: age.toFixed(4).toString().split(".")[1]
	});
})()


export const months_list = [
	"january",
	"february",
	"march",
	"april",
	"may",
	"june",
	"july",
	"august",
	"september",
	"october",
	"november",
	"december"
];


function isTime(month = null, day = null) {
	if (month != null) {
		month = moment().month() == month - 1;
	}

	if (day != null) {
		day = moment().date() == day;
	}

	const has_month = typeof month == "boolean";
	const has_day   = typeof day   == "boolean";

	const conditions = [
		(has_month && month && has_day && day),
		(has_month && month && !has_day),
		(has_day   && day   && !has_month)
	];

	return conditions.includes(true);
}


export const time = {
	is_valentimes: isTime(2, 14),
	is_april_fools: isTime(4, 1),
	is_727: isTime(7, 27),
	is_birthday: isTime(9, 11),
	is_halloween: isTime(10, 31),
	is_christmas: isTime(12, 25),

	month: months_list[moment().month()]
};