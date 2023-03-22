<script context="module">
	let modals = {};

	export function modal(id) {
		return modals[id]
	}
</script>

<script>
	import { onDestroy } from 'svelte';

	export let id = '';
	let visible = false;

	function show() {
		visible = true;
	}

	function hide() {
		visible = false;
	}

	modals[id] = { show, hide };

	onDestroy(() => {
		delete modals[id];
	})
</script>

<div class="modal-container" class:visible on:click={event => {
	if (event.target.classList.contains('modal-container')) modals[id].hide();
}}>
	<div class="box modal">
		<slot/>
	</div>
</div>