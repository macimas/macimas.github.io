<script>
	import moment from "moment";
	import { createFooters } from "libs/footers.svelte.js";

	import { addModal } from "@/Modals.svelte";
	import { crab_status } from "@/libs/crab.svelte.js";

	import CrabFooters from "@/crabs/Footers.svelte";
	import loving from "@/assets/love-and-svelte.png";

	const footers = createFooters();

	function footerClick(event) {
		if (!crab_status.active) {
			footers.update();
		}
		else {
			addModal({
				component: CrabFooters
			});
		}
	}

	const last_updated = moment(__LAST_UPDATED__).format("LL, LTS");
</script>


<footer>
	<div class="footer clicky crabby" onclick={footerClick}>
		<img class="box" src={footers.current.url}>
	</div>

	<img src={loving} alt="love and svelte">

	<p>last updated on {last_updated}</p>
</footer>