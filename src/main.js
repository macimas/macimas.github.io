import { mount, unmount } from "svelte";

import { getCurrentDesign } from "./libs/designs.js";

import "./main.css";
import Splash from "./Splash.svelte";

const design = getCurrentDesign();

const splash = mount(Splash, {
	target: document.getElementById("splash"),
	props: { design }
});

design.component?.then((design) => {
	mount(design, {
		target: document.getElementById("app")
	});

	unmount(splash, {
		outro: true
	});
});