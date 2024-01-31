<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/Button.svelte';

	const CCNA = () => {
		goto('https://www.credly.com/badges/e58818fa-46ac-4399-a6bb-bd037c390572');
	};

	const I2CS = () => {
		goto('https://www.credly.com/badges/e7cc024e-620d-4135-bc86-8a868921990c');
	};

	const NS = () => {
		goto('https://www.credly.com/badges/543e1f8b-d2f4-41e6-bfb7-8068c0b3a271');
	};
</script>

<div class="space-y-3">
	<div class="rounded-xl flex flex-row items-center bg-opacity-25 bg-blue-700 p-4 relative">
		<img src="/CCNAITN__1_.png " alt="" width="100" />
		<div class="flex flex-col ml-3 text-left">
			<p class="text-xl font-medium">CCNA: Introduction to Networks</p>
			<p class="text-sm">Cisco Networking Academy</p>
			<Button
				text=""
				icon="glassNo"
				type="dark"
				size="1.1x"
				clazz="w-fit absolute right-2 top-2"
				ariaLabel="Harcinfo"
				on:clicked={CCNA}
			/>
		</div>
	</div>
	<div class="rounded-xl flex flex-row items-center bg-opacity-25 bg-blue-700 p-4 relative">
		<img src="/ns.png " alt="" width="100" />
		<div class="flex flex-col ml-3 text-left">
			<p class="text-xl font-medium">CCNA: Network Security</p>
			<p class="text-sm">Cisco Networking Academy</p>
			<Button
				text=""
				icon="glassNo"
				type="dark"
				size="1.1x"
				clazz="w-fit absolute right-2 top-2"
				ariaLabel="Harcinfo"
				on:clicked={NS}
			/>
		</div>
	</div>
	<div class="rounded-xl flex flex-row items-center bg-opacity-25 bg-blue-700 p-4 relative">
		<Button
			text=""
			icon="glassNo"
			type="dark"
			size="1.1x"
			clazz="w-fit absolute right-2 top-2"
			ariaLabel="Harcinfo"
			on:clicked={I2CS}
		/>
		<img src="/I2CS__1_.png" alt="" width="100" />
		<div class="flex flex-col text-left ml-3">
			<p class="text-xl font-medium">Introduction to Cybersecurity</p>
			<p class="text-sm">Cisco Networking Academy</p>
		</div>
	</div>
</div>
