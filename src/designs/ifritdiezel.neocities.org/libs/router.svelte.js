console.log("⛓️ routerchain (this sucks. when i am gonna rewrite this crap?)");


import { mount, unmount } from "svelte";


const search = new URLSearchParams(location.href);

let config = null;
let route = $state(null);


export function router(_config) {
	config = _config;
	route = search.get("🚗") || config.base_path;

	let app = null;

	return ((target) => {
		if (app) {
			unmount(app);
		}

		const path = route || config.base_path || "/";

		const current = config.routes.find((item) => {
			return (item.path == path);
		});

		app = mount(current.component, { target });

		search.set("🚗", route);

		const url = decodeURIComponent(search.toString());

		history.pushState("deta", "", url);
	});
}


export function link(node) {
	const href = node.attributes.getNamedItem("href")?.value;

	if (!href) {
		return;
	}

	const search = new URLSearchParams(location.search);
	search.set("🚗", href);

	const result = decodeURIComponent(search.toString());

	node.href = result;

	function navigate(event) {
		event.preventDefault();

		route = href;
	}

	node.addEventListener("click", navigate);

	return (() => {
		console.log(route, href);

		if (route == href) {
			node.style.fontWeight = "bold";
		}
		else {
			route.style.fontWeight = null;
		}
	});
}