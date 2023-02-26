<script context="module">
	import Button from '$lib/Button.svelte';
</script>

<script lang="ts">
	const submitForm = () => {};
</script>

<svelte:head>
	<title>Daniel Borowski | Kontakt</title>
</svelte:head>

<main class="flex flex-col justify-center items-center hero p-4 ">
	<div class="flex flex-row justify-center w-1/2 text-charcoal ">
		<form
			on:submit|preventDefault
			class="flex bg-white text-charcoal p-8 rounded-l-xl flex-col w-full space-y-4"
		>
			<h1 class="text-3xl text-center mb-2">Zrealizujmy twój pomysł!</h1>
			<div>
				<label for="first_name" class="block mb-1 font-medium  text-charcoal">Imię</label>
				<input
					type="text"
					class="bg-gray-50 border border-gray-300 text-charcoal text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					placeholder="Jan"
					required
				/>
			</div>
			<div>
				<label for="first_name" class="block mb-1 font-medium  text-charcoal">Email</label>
				<input
					type="text"
					class="bg-gray-50 border border-gray-300 text-charcoal text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					placeholder="example@example.com"
					required
				/>
			</div>
			<div>
				<label for="first_name" class="block mb-1 font-medium  text-charcoal">Wiadomość</label>
				<textarea
					class="bg-gray-50 border border-gray-300 text-charcoal text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 resize-none"
					cols="30"
					rows="6"
					required
				/>
				<Button
					text="Wyślij"
					icon="mail"
					size="1.2x"
					type="main-contact"
					ariaLabel="Wyślij wiadomość"
					clazz="mt-4 w-full justify-center"
					on:clicked={submitForm}
				/>
			</div>
		</form>
		<div
			class="p-8 rounded-r-xl w-1/2 flex flex-col space-y-4 bg-charcoal bg-opacity-80 text-white"
		>
			<div>
				<h1 class="text-4xl">Telefon</h1>
			</div>
			<div>
				<h1>Adres</h1>
			</div>
			<div>
				<h1>Mail</h1>
			</div>
		</div>
	</div>
</main>
