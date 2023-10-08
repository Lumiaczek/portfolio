<script context="module">
	import { goto } from '$app/navigation';
	import Button from '$lib/Button.svelte';
</script>

<script lang="ts">
	const contact = () => {
		goto('/contact');
	};
</script>

<div
	class="flex flex-col lg:h-[45vh] justify-center items-center text-center lg:text-left md:mx-auto xl:w-[92%] 2xl:w-[85%] px-4 xl:px-0 text-white mt-12 lg:mt-6"
>
	<div class="flex flex-col lg:flex-row justify-between items-center">
		<div
			class=" flex flex-col justify-center text-center bg-charcoal p-8 bg-opacity-80 rounded-2xl"
		>
			<h2 class="text-xl">Masz jakiś pomysł? Zrealizujmy go razem</h2>
			<h1
				class="font-['Bungee'] text-4xl  lg:text-5xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-800  mt-2"
			>
				Skontaktuj się ze mną
			</h1>
			<Button
				text="Skontaktuj się"
				type="main"
				icon="plane"
				size="1.2x"
				clazz="text-center w-fit mx-auto"
				on:clicked={contact}
			/>
		</div>
	</div>
</div>
