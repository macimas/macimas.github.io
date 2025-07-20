<script>
	import moment from "moment";

	import { parseText } from "libs/utils";
	import { texts } from "libs/texts.js";
</script>

{#each texts as text}
	<div class="box">
		<b>{text.date}</b>

		<p>{@html parseText(text.value)}</p>
	</div>
{/each}