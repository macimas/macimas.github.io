console.log("🗣️ qna");


type QuestionType = "dimiss" | "ok";

interface QuestionRecipe {
	label: string;
	text: string | string[]
}


const questions: QuestionRecipe[] = [];

class Question {
	data: QuestionRecipe = null;
	questions: QuestionRecipe[] = [];

	constructor(data: QuestionRecipe) {
		this.data = data;
	}

	addResponse(data: QuestionRecipe) {
		this.questions.push(data);
	}
}


class Questionnaire {

}


let q: Question = null;


// q = new Question({
// 	label: "your name",
// 	text: [
// 		`my name has no significant meaning, it just came from a shortening of "macdowntwo". and that name came as a ripoff of another person "desktopone"`
// 	]
// });

// q.addResponse({
// 	label: "that's it?",
// 	text: [
// 		"well, i guess here's a rough history of my previous names:",
// 		`denisdaily530 (2017) - was a big fan of Denis Daily at that time. was first used on a little game called Everybody Edits, then used it for my discord`,
// 		`ZkyLB (2017/2018?) - random name i came up with. was first used on discord, then onto reddit`,
// 		`Tyler Cruz (2018?) - was a fan of LOCAL58 at that time, was attempting to create my own little version but never really went anywhere. discordo and youtube.`,
// 		`macdowntwo (2018) - retarded 11 year old me in indielm server with the server owner desktopone online thought "hmm yes i shall mimic his name". mindustry.`,
// 		`macimas (2019?) - first stylized as Macimas, was initially a name for a social platform concept thing. discordo.`
// 	]
// });


// q = new Question({
// 	label: "PC specs",
// 	text: [
// 		"i7-3540M, with its HD Graphics 4000",
// 		"16 gigs of RAM",
// 		"500 GB Smasnug SSD 850 EVO, running EndeavourOS",
// 		"it's not perfect but good enough"
// 	]
// });

// q.addResponse({
// 	label: "why linux?",
// 	text: [
// 		"no particular reason, i wanted to try something new in like 2021 and installed Linux Mint on another old laptop",
// 		"then this laptop's install of Windows 10 decided to die and i got pissed off i decided to just wipe it with linux instead of bothering to fix it",
// 		"mostly haven't looked back, though i still have to fallback to bimbows whenever i feel like playing games or handling printer issues"
// 	]
// });


// q = new Question({
// 	label: "fucked up website",
// 	text: [
// 		"fair enough"
// 	]
// });


// q = new Question({
// 	label: "music taste",
// 	text: [
// 		"oh i dunno... lots of Japanese stuff."
// 	]
// });


// q = new Question({
// 	label: "favorite color",
// 	text: [
// 		"blue, white, and red"
// 	]
// });


// q = new Question({
// 	label: "gender",
// 	text: [
// 		"feel free and open source to use any pronouns!"
// 	]
// });


// q = new Question({
// 	label: "favorite season",
// 	text: [
// 		"i don't have one in particular"
// 	]
// });