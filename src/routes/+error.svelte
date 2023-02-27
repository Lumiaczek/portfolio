<script context="module">
	import Button from '$lib/Button.svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
</script>

<script lang="ts">
	const contact = () => {
		goto('/contact');
	};
</script>

<main class="flex flex-col justify-center items-center hero p-4">
	<div class="text-center p-8 bg-charcoal bg-opacity-80 rounded-3xl text-white">
		<h2
			class="font-['Bungee'] text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-800"
		>
			{$page.status}
			{$page.error?.message}
		</h2>
		{#if $page.error?.message === 'Not Found'}
			<p class="text-lg lg:text-xl mt-2">Nie znalazłem twojego rządania.</p>
		{/if}

		{#if $page.error?.message === 'Internal Error'}
			<p class="text-lg lg:text-xl mt-2">Wygląda na to że serwer nie odpowiada.</p>
		{/if}

		<h1 class="text-lg lg:text-xl mt-1">Jeżeli uważasz że to błąd strony skontaktuj się ze mną:</h1>
		<div class="flex flex-col items-center">
			<Button
				text={'Kontakt'}
				type={'main'}
				icon={'plane'}
				size={'1.1x'}
				clazz={'mt-3'}
				on:clicked={contact}
			/>
		</div>
	</div>
</main>
