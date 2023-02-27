<script context="module">
	import { faSquareCheck, faCircleXmark } from '@fortawesome/free-regular-svg-icons';
	import Fa from 'svelte-fa';
	import { fly } from 'svelte/transition';
</script>

<script lang="ts">
	export let msg = '';
	export let status = '';
</script>

<div
	class="fixed bottom-4 left-4"
	in:fly={{ x: -100, duration: 400 }}
	out:fly={{ x: -100, duration: 400 }}
>
	<div class="rounded-xl bg-white p-6">
		<div class="flex flex-row items-center">
			{#if status === 'Success'}
				<Fa icon={faSquareCheck} size="1.6x" class="text-green-600 mb-0.5" />
			{/if}
			{#if status === 'Failed'}
				<Fa icon={faCircleXmark} size="1.6x" class="text-red-600 mb-0.5" />
			{/if}
			<p class="text-gray-900 ml-2 text-lg">{msg}</p>
		</div>
	</div>
</div>
