console.log("📱 devices");


import { reactive } from "vue";


const url = (import.meta.env.PROD)
	? "https://macimas.deno.dev/devices"
	: "http://localhost:8000/devices";

const devices = {
	smasnug: null,
	inferno: null
};


export async function getDevices() {
	const res = await fetch(url);
	const json = await res.json();
	return json;
}