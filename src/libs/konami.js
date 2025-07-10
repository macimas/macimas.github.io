console.log("🎮 konami");


import { reactive } from "vue";
import { onMounted, onUnmounted } from "vue";


const konami = [
	'ArrowUp',   'ArrowUp',
	'ArrowDown', 'ArrowDown',
	'ArrowLeft', 'ArrowRight',
	'ArrowLeft', 'ArrowRight',
	'KeyB',      'KeyA'
];


export function useKonami() {
	const details = reactive({
		toggled: false,
		count: 0,

		onsuccess: null
	});

	function listener(event) {
		if (konami[details.count] != event.code) {
			details.count = 0;
			console.log("no");
			return;
		}

		details.count++;

		console.log(details.count);
		
		if (details.count == konami.length) {
			details.toggled = !details.toggled;
			details.count = 0;

			if (details.onsuccess) {
				details.onsuccess(details.toggled);
			}
		}
	}

	onMounted(() => {
		window.addEventListener("keydown", listener);
	});

	onUnmounted(() => {
		window.removeEventListener("keydown", listener);
	});

	return (details);
}