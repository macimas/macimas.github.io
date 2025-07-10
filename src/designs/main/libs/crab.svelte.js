export const crab_status = $state({
	active: false
});

export function toggleCrab() {
	crab_status.active = !crab_status.active;

	if (crab_status.active) {
		document.documentElement.classList.add("crab-time");
		console.log("🦀 IT'S CRAB TIME");
	}
	else {
		document.documentElement.classList.remove("crab-time");
		console.log("🦀😥 no longer crab");
	}
}