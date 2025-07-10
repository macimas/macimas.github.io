<script module>
	import { fade } from "svelte/transition";
	import { scale, depointer } from "libs/transitions.js";
	import { cubicIn, cubicOut } from "svelte/easing";

	const modals = $state([]);

	export function addModal(data) {
		modals.push(data);
	}

	export function removeModal() {
		modals.pop();
	}

	function onkeydown(event) {
		if (event.key == "Escape") {
			removeModal();
		}

		if (event.key == "F1") {
			event.preventDefault();

			addModal({
				size: "small",
				snippet: noHelpAvailable
			});
		}
	}

	if (sessionStorage.seen_wip != "yeah") {
		sessionStorage.seen_wip = "yeah";

		addModal({
			snippet: WipNotice,
			size: "medium"
		});
	}
</script>


<svelte:window {onkeydown}/>


{#snippet WipNotice()}
	<h1>👋 hii pls read notice</h1>

	<p>
		<b>website is still pretty wip!</b>
		<br>
		thanks for noticing.
		<br>
		now go explore, just click/tap on dark background to dismiss this popup :)
	</p>
{/snippet}


{#snippet noHelpAvailable()}
	<h1>No Help Available</h1>

	(so leave me alone)

	<div class="list">
		<button onclick={() => removeModal()}>OK</button>
		<button>Help</button>
	</div>
{/snippet}


<div class="modals">
	{#each modals as modal}
		<div class="modal" out:depointer>
			<div
				class="background"
				in:fade={{ duration: 250, easing: cubicOut }}
				out:fade={{ duration: 250, easing: cubicIn }}
				onclick={removeModal}
			>
					
			</div>

			<div
				class={["content", "box", "size-" + (modal.size || "big")]}
				in:scale={{ easing: cubicOut }}
				out:scale={{ easing: cubicIn }}
			>
				<svelte:boundary>
					{#snippet failed(error, reset)}
						{error}
					{/snippet}

					{#if modal.name}
						<h1>{modal.name}</h1>
					{/if}

					{#if modal.component}
						{@const Component = modal.component}
						<Component/>
					{/if}

					{#if modal.snippet}
						{@const snippet = modal.snippet}

						{#if modal.data}
							{@render snippet(modal.data)}
						{:else}
							{@render snippet()}
						{/if}
					{/if}
				</svelte:boundary>
			</div>
		</div>
	{/each}
</div>