<script>
	import Modal, { modal } from 'lib/Modal.svelte';
	import DesignSwitcher from 'lib/DesignSwitcher.svelte';

	const params = new URLSearchParams(window.location.search);

	let design = sessionStorage.design ?? 'main';
	let page = sessionStorage.page ?? 'Design';

	const getDesign = () => import(`./design/${design}/${page}.svelte`).catch(() => {
		sessionStorage.design = 'main';
		history.go();
	});
</script>

<DesignSwitcher/>
<span class="bread-container" on:click={() => modal('DesignSwitcher').toggle()}>
	<img class="bread" src="/img/bread.png">
</span>

{#await getDesign()}
	<img class="loading" src="/img/loading.gif">
{:then design}
	<svelte:component this={design.default}/>
{/await}