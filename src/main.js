import { mount, unmount } from "svelte";
import { getCurrentDesign } from "./libs/designs.js";

import Splash from "./Splash.svelte";
import Achievements from "./Achievements.svelte";

import "./main.css";


const design = getCurrentDesign();

const splash = mount(Splash, {
	target: document.getElementById("splash"),
	props: { design }
});

const achievements = mount(Achievements, {
	target: document.getElementById("achievements")
});

design.component?.then((design) => {
	mount(design, {
		target: document.getElementById("app")
	});

	unmount(splash, {
		outro: true
	});
});