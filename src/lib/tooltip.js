// stolen from https://svelte.dev/repl/dd6754a2ad0547c5b1c1ea37c0293fef?version=3.57.0
// + some necessary and unnecessary tweaks

import Tooltip from "./Tooltip.svelte";

export function tooltip(element) {
	let title, tooltipBox;

	function getTitle() {
		title = element.dataset.tooltip
	}

	function initialize(event) {
		getTitle();
		tooltipBox = new Tooltip({
			props: {
				title: title,
				x: event.pageX,
				y: event.pageY
			},
			target: document.body,
		})
	}

	function update(event) {
		getTitle();
		tooltipBox.$set({
			title: title,
			x: event.pageX,
			y: event.pageY
		})
	}

	function kill() {
		tooltipBox.$destroy();
	}
	
	element.addEventListener('mouseenter', initialize);
	element.addEventListener('mouseout', kill);
	element.addEventListener('mousemove', update);
	element.addEventListener('click', update);
	
	return {
		destroy() {
			element.removeEventListener('mouseenter', initialize);
			element.removeEventListener('mouseout', kill);
			element.removeEventListener('mousemove', update);
			element.removeEventListener('click', update);
		}
	}
}