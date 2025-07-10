<script>
	import moment from "moment";

	import { parseText } from "libs/utils.js";
	//import { getDevices } from "libs/devices.js";
	import devices from "bits/devices.json";

	const info_labels = {
		"name":
			["📛", "Name"],
		"model":
			["🆎", "Model"],
		"cpu":
			["🧠", "CPU"],
		"gpu":
			["📊", "GPU"],
		"ram":
			["🐏", "RAM"],
		"storage":
			["💾", "Storage"],
		"os":
			["⚙️", "OS"],
		"notes":
			["📝", "Notes"]
	};

	const update_leeway = 1000;

	let devices_status = $state(null);

	function showDevicesStatus() {
		devices_status.value = false;

		getDevices()
			.then((data) => devices_status.value = data);
	}

	function getTime(unix) {
		const time = moment(unix)
			.diff(moment(), "seconds");

		return Math.abs(time);
	}

	function getMiB(bytes) {
		return (bytes / 1024).toFixed(2);
	}

	function getGiB(bytes) {
		return (bytes / 1024 ** 2).toFixed(2);
	}

	function getSizePercent(data) {
		return ((1 - data.available / data.capacity) * 100).toFixed();
	}

	function getUsed(data) {
		return data.capacity - data.available;
	}

	function parseUptime(uptime) {
		return moment().subtract(uptime, "seconds").format("LLLL");
	}
</script>


{#snippet lenobo_specs()}
	<iframe
		src="/pdf/lenobo-specs.pdf"
		height="800"
		style="border-radius:8px"
	/>
{/snippet}

<div class="list">
	{#each devices as category}
		<details open>
			<summary>
				<h2>{category.name}</h2>
			</summary>

			<div class="list">
				{#each category.items as device}
					<table class="item">
					<tbody>
						{#each Object.entries(info_labels) as [item, [prefix, name]]}
							{#if device[item]}
								<tr>
									<td title={name}>
										{prefix}
									</td>
									<td>
										{@html parseText(device[item])}
									</td>
								</tr>
							{/if}
						{/each}
					</tbody>
					</table>
				{/each}
			</div>
		</details>
	{/each}
</div>



<h2>🛜 devices status</h2>

removed for now, sorry

<!--
<p>
	very wip and kinda bad
</p>
<p>
	when i get around to improving this, data will be updated automatically thru websockets
</p>

{#if device_status != false}
	<div class="list">
		<button onclick={showDevicesStatus}>
			{#if !devices_status}
				show
			{:else}			
				update
			{/if}
				device status
		</button>
	</div>
{/if}

<div class="list" v-if="devices_status">
	<template v-for="(data, name) in devices_status">
		<div class="item" v-if="!data">
			no data atm for {{ name }} :(
		</div>

		<table class="item list" v-else>
		<tbody>
			<tr>
				<td title="name">📛</td>
				<td>
					{{ name }}
				</td>
			</tr>
			<tr>
				<td title="battery">🔋</td>
				<td>
					{{ data.battery.charge }}
					//
					{{ data.battery.capacity }} mAh
					
					({{ data.battery.percent }}%)

					<p v-if="data.battery.is_charging">
						⚡ <b>charging</b>
					</p>
				</td>
			</tr>
			<tr>
				<td title="memory">🐏</td>
				<td>
					{{ getMiB(getUsed(data.memory)) }}
					//
					{{ getMiB(data.memory.capacity) }} MiB

					({{ getSizePercent(data.memory) }}%)
				</td>
			</tr>
			<tr>
				<td title="storage">💾</td>
				<td>
					{{ getGiB(getUsed(data.storage)) }}
					//
					{{ getGiB(data.storage.capacity) }} GiB

					({{ getSizePercent(data.storage) }}%)
				</td>
			</tr>
			<tr>
				<td title="uptime">🌵</td>
				<td>
					{{ parseUptime(data.uptime) }}
				</td>
			</tr>
			<tr>
				<td title="last updated">
					⏱️
				</td>
				<td>
					{{ getTime(data.last_updated) }}s ago

					<p style="margin-top:4px" v-if="getTime(data.last_updated) > update_leeway">
						⚠️ <b>no recent update</b>
					</p>
				</td>
			</tr>
		</tbody>
		</table>
	</template>
</div>

<p v-if="devices_status == false">
	please wait...
</p>

<p v-if="devices_status == false">
	if you don't see the stuff, something has gone terribly wrong.
</p>

<p>btw some personal notes:</p>

<div class="box">
	<p>my devices won't be sending updates 24/7</p>
	<p>a notice will be displayed if last updated is greater than {update_leeway}s</p>
	<p>may also display no data for device when it hasn't updated in a while</p>
</div>

<div class="box">
	<p>you may notice that battery percent doesn't really line up with mAh display</p>
	<p>here's the rough details:</p>
	<ul>
		<li>smasnug is 100% at around 4000 // 4900 mAh</li>
		<li>inferno is 100% at around 4500 // 5000 mAh</li>
	</ul>
	<p>
		this is more or less pretty normal. manufacturers typically do this kind of cutoff to prolong the battery's health and/or to say that "phone is so fast at charging!"
		<small>
			[<a href="https://en.wikipedia.org/wiki/Wikipedia:Citation_needed">citation needed</a>]
		</small>
	</p>
	<p>the smasnug is still able to charge up to around 4400 mAh before it stops charging</p>
	<p>the inferno however is a tad more accurate as it charges up to around 4500 mAh, same as the cutoff</p>
</div>

<div class="box">
	<p>the smasnug phone has an advertised 5000 mAh capacity, but is technically 4900 mAh</p>
	<p>why? pfft i dunno</p>
</div>
-->


<h2>🤔 thoughts and prayers 🙏</h2>

<p>im not very good at thoughting, but here are some thinks:</p>

<div class="list">
	<div class="box">
		<p>my <b>Lenovo G500</b> is okay i guess</p>
	</div>

	<div class="box">
		<p>my <b>dynabook R732/G</b> was pretty neat i guess</p>
	</div>

	<div class="box">
		<p>
			my <b>Samsung Galaxy A05s</b> is pretty neat. has some very neat customizable stuff along with Good Lock modules, though had to use Fine Lock as a wrapper since they're not available in the store for me
		</p>

		<p>
			only one minor issue i have is that i can't have clock seconds on status bar. there is QuickStar that shows seconds on quick panel, but that's not status bar >:(
		</p>
	</div>

	<div class="box">
		<p>my <b>Infinix Hot 11 2022</b> kinda sucks, or rather the Android skin sucks. it's basically just stock Android with half-assed stuff that breaks other stuff</p>
		<p>my main issues with it:</p>

		<ul>
			<li>
				sometimes when it gets a notification, my CPU goes to full usage endlessly + it runs my battery into a fire
				<br>
				i have to restart my phone just to make it stop
			</li>
			<li>
				using recents tends to be quite unstable when using another launcher
			</li>
			<li>
				recents is also a part of the launcher they have
				<br>
				basically when i restart, i gotta open their launcher to make recents work
			</li>
		</ul>

		<p>i dont think i will buy another phone from Infinix, at least for a long while</p>

		<p>
			also probably won't buy from <b>Tecno</b> and <b>itel</b> either since they're all under the same parent company
			<small>
				[<a href="https://en.wikipedia.org/wiki/Transsion">1</a>]
			</small>
			<small>
				[<a href="https://www.androidauthority.com/what-is-transsion-3466021/">2</a>]
			</small>
			so i would not be surprised at all if they also suck
		</p>
	</div>

	<div class="box">
		<p>my <b>Lenovo S5</b> was pretty neat, it was an okay phone for me</p>
	</div>
</div>