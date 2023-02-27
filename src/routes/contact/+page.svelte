<script context="module">
	import Button from '$lib/Button.svelte';
	import Fa from 'svelte-fa';
	import { faEnvelope, faMap, faAddressCard } from '@fortawesome/free-regular-svg-icons';
	import Footer from '$lib/footer/Footer.svelte';
	import Toast from '$lib/Toast.svelte';
</script>

<script lang="ts">
	let name = '';
	let email = '';
	let msg = '';

	let toastText = '';
	let status = '';

	const submitForm = async () => {
		if (!name || !email || !msg || name === '' || email === '' || msg === '') {
			showToast('Failed', 'Uzupełnij dane');

			return;
		}

		await fetch(
			'https://portfolio-2a42d-default-rtdb.europe-west1.firebasedatabase.app/mails.json',
			{
				method: 'POST',
				body: JSON.stringify({
					name: name,
					email: email,
					msg: msg,
					date: new Date().toLocaleString()
				})
			}
		)
			.then((res) => {
				if (res.status === 200) {
					showToast('Success', 'Wiadomość wysłana!');

					name = '';
					email = '';
					msg = '';
				} else {
					showToast('Failed', 'Nie udało się wysłać wiadomości');
				}
			})
			.catch((res) => {
				showToast('Failed', 'Nie udało się wysłać wiadomości');
			});
	};

	const showToast = (s: string, text: string) => {
		status = s;
		toastText = text;

		setTimeout(() => {
			status = '';
		}, 2000);
	};
</script>

<svelte:head>
	<title>Daniel Borowski | Kontakt</title>
</svelte:head>

<main class="flex flex-col justify-center items-center xl:hero p-4 mt-7">
	<div class="flex flex-col xl:flex-row justify-center lg:w-1/2 text-charcoal ">
		<form
			on:submit|preventDefault
			class="flex bg-white text-charcoal p-8 rounded-xl xl:rounded-r-none xl:rounded-l-xl flex-col w-full space-y-4"
		>
			<h1 class="text-3xl text-center mb-2">Zrealizujmy twój pomysł!</h1>
			<div>
				<label for="first_name" class="block mb-1 font-medium  text-charcoal">Imię</label>
				<input
					type="text"
					class="bg-gray-50 border border-gray-300 text-charcoal text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					placeholder="Jan"
					required
					bind:value={name}
				/>
			</div>
			<div>
				<label for="first_name" class="block mb-1 font-medium  text-charcoal">Email</label>
				<input
					type="text"
					class="bg-gray-50 border border-gray-300 text-charcoal text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
					placeholder="example@example.com"
					required
					bind:value={email}
				/>
			</div>
			<div>
				<label for="first_name" class="block mb-1 font-medium  text-charcoal">Wiadomość</label>
				<textarea
					class="bg-gray-50 border border-gray-300 text-charcoal text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 resize-none"
					cols="30"
					rows="6"
					required
					bind:value={msg}
					placeholder="Proszę o kontakt..."
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
			class="p-8 rounded-xl mt-10 xl:mt-0 xl:rounded-l-none xl:rounded-r-xl xl:w-1/2 flex flex-col justify-around  bg-charcoal bg-opacity-80 text-white"
		>
			<div class="p-4">
				<div class="flex flex-row items-center">
					<Fa icon={faAddressCard} size="2.5x" class="mr-3 mb-2" />
					<h1 class="text-4xl">Telefon</h1>
				</div>
				<a href="tel:782068821" class="text-lg">+48 782 068 821</a>
			</div>
			<div class="p-4">
				<div class="flex flex-row items-center">
					<Fa icon={faMap} size="2.5x" class="mr-3 mb-2" />
					<h1 class="text-4xl">Adres</h1>
				</div>
				<a href="" class="text-lg">Polska, Zachodniopomorskie, Barlinek</a>
			</div>
			<div class="p-4">
				<div class="flex flex-row items-center">
					<Fa icon={faEnvelope} size="2.5x" class="mr-3 mb-2" />
					<h1 class="text-4xl">Mail</h1>
				</div>
				<a href="mailto:danielb.business05@gmail.com" class="text-lg"
					>danielb.business05@gmail.com</a
				>
			</div>
		</div>
	</div>
	{#if status === 'Success'}
		<Toast {status} msg={toastText} />
	{/if}

	{#if status === 'Failed'}
		<Toast {status} msg={toastText} />
	{/if}
</main>

<Footer />
