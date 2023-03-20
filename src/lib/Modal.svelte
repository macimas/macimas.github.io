<script context="module">
	export let id = '';
	let visible = false;

	export function showModal(toId, value) {
		if (id == toId) visible = value
	}	
</script>

<dialog style="position:absolute;width:100%;height:100%;background:#000a">
	<div class="box modal">
		<slot/>
	</div>
</dialog>