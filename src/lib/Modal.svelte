<script context="module">

	let modals = {};
	export const modal = (id) => { return modals[id] };
</script>

<script>
	import { onDestroy } from 'svelte';

	export let id = '';
	export let visible = false;
	let container_classes = '';
	let modal_classes = '';
	export { container_classes as containerclass };
	export { modal_classes as modalclass }

	container_classes = `${container_classes} modal-container`;
	modal_classes = `${modal_classes} modal`;

	const show = () => visible = true;
	const hide = () => visible = false;
	const toggle = () => visible = !visible;

	function unfocus(event) {
		if (event.target.classList.contains('modal-container')) {
			modals[id].hide();
		}
	}

	modals[id] = { show, hide, toggle };

	onDestroy(() => delete modals[id]);
</script>

{#if visible}
	<div class={container_classes} on:click={unfocus}>
		<div class={modal_classes}>
			<slot/>
		</div>
	</div>
{/if}