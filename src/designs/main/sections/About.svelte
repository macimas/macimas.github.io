<script>
	import crab from "@/assets/crab.png";
	import { toggleCrab } from "@/libs/crab.svelte.js";

	import { age } from "libs/specials.js";
</script>


<div class="decor">
	<a class="switcher clicky" title="goober" href="?🎨=switcher">
		<img src="/img/goober-animated.png">
	</a>
	
	<img src="/img/tricolor.png" title="i fucking love this flag">

	<img src="/img/apple.png" title="apple">

	<div class="crab clicky" title="crab time" onclick={toggleCrab}>
		<img src={crab}>
	</div>
</div>


<p>
	🇵🇭 dysfunctional <span title="September 11, 2006">{age.brief}<small>.{age.decimal}</small></span> year old that is pretty nonsensical, pessimistic, unprofessional, incompetent, and terrible!
</p>
<p>am interested a lil bit in programming, graphic design, drawing, music, and anime (weeb)</p>
<p>
	my native tongue is Filipino but i am not very good at it.
	<br>
	i'm a lot more comfortable with English/Engrish
</p>
<p>
	guess who is an internet person? haha you probably already know
	<br>
	<small>(please don't interact with me)</small>
</p>