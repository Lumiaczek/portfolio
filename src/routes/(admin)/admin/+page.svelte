<script lang="ts" context="module">
	import Button from '$lib/Button.svelte';
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';
</script>

<script lang="ts">
	const login = () => {
		goto('/auth');
	};

	export let data: PageData;
</script>

<svelte:head>
	<title>Panel administratora</title>
</svelte:head>

{#if !data?.success}
	<div
		class="flex absolute top-0 left-0 flex-col justify-center items-center bg-charcoal bg-opacity-80 backdrop-blur-md lg:h-screen w-full"
	>
		<div class="flex flex-col px-12 py-8 bg-white rounded-xl z-10">
			<p class="text-xl mb-6">Autoryzacja nie powiodła się!</p>
			<Button
				text="Powrót"
				icon=""
				size=""
				type="danger"
				ariaLabel="Powrót"
				clazz="w-full justify-center"
				on:clicked={login}
			/>
		</div>
	</div>
{/if}

{#if data?.success}
	<section
		class="flex relative flex-col h-fit lg:h-[90vh]  md:mx-auto xl:w-[92%] 2xl:w-[85%] px-6 xl:px-0 scroll-mt-20 lg:scroll-p-0"
	/>
{/if}
