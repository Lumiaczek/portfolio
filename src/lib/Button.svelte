<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Fa from 'svelte-fa';
	import { faEnvelope, faPaperPlane } from '@fortawesome/free-regular-svg-icons';
	import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

	const dispatch = createEventDispatcher();

	export let text = '';
	export let type = 'main';
	export let icon: string;
	export let size: string;
	export let clazz = '';
	export let ariaLabel = '';
</script>

<button
	class={`btn flex flex-row items-center ${clazz}`}
	class:btn-main={type === 'main'}
	class:btn-outline={type === 'outline'}
	class:btn-dark={type === 'dark'}
	class:btn-main-contact={type === 'main-contact'}
	aria-label={ariaLabel}
	on:click={() => {
		dispatch('clicked');
	}}
>
	{text}
	{#if icon === 'plane'}
		<Fa icon={faPaperPlane} class={'text-white ml-3 text-lg'} {size} />
	{/if}
	{#if icon === 'mail'}
		<Fa icon={faEnvelope} class={'text-white ml-3 text-lg'} {size} />
	{/if}
	{#if icon === 'glass'}
		<Fa icon={faMagnifyingGlass} class={'text-white ml-3 text-lg'} {size} />
	{/if}
	{#if icon === 'glassNo'}
		<Fa icon={faMagnifyingGlass} class={'text-white text-lg'} {size} />
	{/if}
</button>

<style lang="postcss">
	.btn {
		@apply py-3 px-6 rounded-2xl font-medium text-white text-sm md:text-base xl:text-lg hover:bg-opacity-50 focus:bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200;
	}

	.btn-main {
		@apply bg-blue-800 bg-opacity-30;
	}

	.btn-outline {
		@apply border-blue-800 border-opacity-30 border-2 bg-transparent hover:border-opacity-70 focus:border-opacity-70;
	}

	.btn-dark {
		@apply bg-charcoal bg-opacity-80;
	}

	.btn-main-contact {
		@apply bg-blue-800 bg-opacity-90;
	}
</style>
