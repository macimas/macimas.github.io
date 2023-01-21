<script>
	function bump() { // i was very bored, okay?
		console.log('bump')
	}
</script>

<div on:click={bump} class="box width-fill-available">
	<slot/>
</div>