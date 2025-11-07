<script>
	import moment from "moment";

	import { parse } from "libs/utils";
	import { texts } from "libs/texts.js";
</script>


{#each texts as text}
	<div class="box">
		<b>{text.date}</b>

		<p>{@html parse(text.value)}</p>
	</div>
{/each}