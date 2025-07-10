console.log("🏃 transitions");


export function scale(node, params) {
	const deg = Math.round((Math.random() * 10 * 2) - 10);

	function css(t) {
		const rotate3d = `rotate3d(1, 0, 0, ${(1 - t) * 4}deg)`;
		const rotateZ = `rotateZ(${(1 - t) * deg}deg)`;

		return (`
			opacity: ${t};
			transform: scale(${2 - t}) perspective(50px) ${rotate3d} ${rotateZ};
			filter: blur(${10 * (1 - t)}px);
		`);
	}

	return ({
		easing: params.easing,
		duration: params.duration || 250,
		css
	});
}

export function depointer(node) {
	return ({
		css: () => "pointer-events: none"
	});
}