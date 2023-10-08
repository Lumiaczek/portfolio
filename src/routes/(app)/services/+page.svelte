<svelte:head>
	<title>Daniel Borowski | Usługi</title>
</svelte:head>

<script lang="ts" context="module">
	import Fa from 'svelte-fa';
	import { faWrench, faMobileScreen, faDesktop, faIdCardClip, faNetworkWired } from '@fortawesome/free-solid-svg-icons';
	import {faRedhat } from '@fortawesome/free-brands-svg-icons'
	import Button from '$lib/Button.svelte';
	import { onMount } from 'svelte';
	import Modal from '$lib/Modal.svelte';
</script>

<script lang="ts">

	let alert: string | null = "T";
	let alertShow: boolean;

	let modal = false;
	let modalType: number;

	$: modal;

	let title: string;
	let price: string;

	onMount(async () => {
		alert = localStorage.getItem('visit')

		if(alert === 'T'){
			alertShow = false;
		} else{
			alertShow = true;
		}

	})

	const hideAlert = () => {

		localStorage.setItem('visit', 'T')

		alertShow = false;
	}

	const showModal = (_modalType: number) => {

		modalType = _modalType;

		switch(_modalType){
			case 1:
			
			title = "Tworzenie wizytówek Internetowych"
			price = "do 800zł"

			break;

			case 2:
			
			title = "Konserwacja systemów komputerowych"
			price = "do 150zł"

			break;

			case 3:
			
			title = "Tworzenie aplikacji mobilnych"
			

			break;

			case 4:
			
			title = "Tworzenie aplikacji Internetowych"
			price = "do 2500zł"

			break;

			case 5:
			
			title = "Projekt i instalacja sieci LAN"
			price = "do 800zł"

			break;

			case 6:
			
			title = "Instalacja i konfiguracja serwerów Linux oraz Windows"
			price = "do 500zł"

			break;
		}

		modal = true;

	}

	const closeModal = () => {
		modal = false;
	}

</script>



{#if alertShow}
<main class="backdrop-blur-xl bg-black bg-opacity-80 h-[100vh] w-full fixed top-0 left-0 z-50 flex flex-col justify-center items-center">
	<div class="p-6 bg-white rounded-xl">
		<p class="text-2xl">Wygląda na to że jesteś tutaj pierwszy raz, aby dowiedzieć się więcej o danej usłudze, kliknij w odpowiednią karte.</p>
		<Button text={"Zrozumiałem!"} type="main-contact" icon="" size="" clazz="mx-auto mt-6" on:clicked={hideAlert}/>
	</div>
</main>
{/if}

{#if modal}
<main class="backdrop-blur-lg bg-black bg-opacity-80 h-[100vh] w-full fixed top-0 left-0 z-50 flex flex-col items-center overflow-y-auto">
	{#if modalType === 1}
	<Modal {title} {price} on:closed={closeModal}>
		<p class="mb-4">Prosta wizytówka dla ciebie lub twojej firmy. 
			Oferuje stworzenie projektu oraz całej strony. 
			Jest ona bardzo dobrze zoptymalizowaną i zgodną z najnowocześniejszymi technologami oraz standardami <strong>a11y i SEO</strong>. 
			Całość napisana jest w bibliotece <strong>SvelteKit</strong>, dzięki czemu jest szybka i bardzo responsywna, a hostowana na <strong>Netlify</strong>, dzięki czemu jeszcze bardziej zyskujemy na prędkości i stabilności. 
			Dodatkowo dokładam wszelkich starań, aby znaleźć najtańszą domenę. <strong>Przykładowy raport z mojej strony</strong>:
		</p>
		<img src="/ef.png" alt="" class="mx-auto mb-4">
	</Modal>

	{:else if modalType === 2}
	<Modal {title} {price} on:closed={closeModal}>
		<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat voluptates consectetur neque, veritatis enim saepe, voluptatum accusantium molestias dicta labore quod voluptatibus corrupti. Aperiam, quam. Earum nemo corrupti voluptates porro.</p>
	</Modal>
	{:else if modalType === 4}
	<Modal {title} {price} on:closed={closeModal}>
		<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat voluptates consectetur neque, veritatis enim saepe, voluptatum accusantium molestias dicta labore quod voluptatibus corrupti. Aperiam, quam. Earum nemo corrupti voluptates porro.</p>
	</Modal>
	{:else if modalType === 5}
	<Modal {title} {price} on:closed={closeModal}>
		<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat voluptates consectetur neque, veritatis enim saepe, voluptatum accusantium molestias dicta labore quod voluptatibus corrupti. Aperiam, quam. Earum nemo corrupti voluptates porro.</p>
	</Modal>
	{:else if modalType === 6}
	<Modal {title} {price} on:closed={closeModal}>
		<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat voluptates consectetur neque, veritatis enim saepe, voluptatum accusantium molestias dicta labore quod voluptatibus corrupti. Aperiam, quam. Earum nemo corrupti voluptates porro.</p>
	</Modal>

	{/if}
</main>
{/if}

<section
	class="flex flex-col h-fit lg:h-[90vh] text-center lg:text-left md:mx-auto xl:w-[92%] 2xl:w-[85%] px-6 xl:px-0 scroll-mt-20 lg:scroll-p-0"
	id="services"
>

	<article class="lg:flex lg:flex-col lg:justify-center lg:h-full">
		<div
			class="grid w-full grid-cols-1 grid-rows-3 lg:grid-rows-1 lg:grid-cols-3  gap-y-6 gap-x-2 lg:gap-y-2 lg:gap-x-4 text-center "
		>
			<div class="p-8 bg-charcoal bg-opacity-80 rounded-2xl flex flex-col justify-center hover:scale-105  transition-transform cursor-pointer" on:click={() => {showModal(1)}} on:keypress={() => {showModal(1)}}>
				<Fa icon={faIdCardClip} class={'text-white text-5xl'} />

				<h2 class="text-center text-3xl text-white mt-4 mb-2">Tworzenie wizytówek Internetowych</h2>

				<p class="text-lg text-white text-center">
					Wizytówka dla twojej firmy lub ciebie aby, klienci łatwiej mogli odaleźć cię w Internecie.
				</p>
			</div>
			<div
				class="flex flex-col p-8 bg-opacity-80 lg:mx-4 mx-0 mb-2 lg:mb-0 bg-charcoal rounded-2xl hover:scale-105  transition-transform cursor-pointer" on:click={() => {showModal(2)}} on:keypress={() => {showModal(2)}}
			>
				<Fa icon={faWrench} class={'text-white text-5xl'} />

				<div class="flex flex-col justify-between items-center h-full">
					<h2 class="text-center text-3xl text-white mb-2 mt-4">Konserwacja systemów komputerowych</h2>
					<p class="text-lg text-white text-center">
						Naprawa, modernizacja, konserwacja i składanie komputerów osobistych oraz laptopów
					</p>

				</div>
			</div>
			<div class="p-8 bg-charcoal bg-opacity-80 rounded-2xl flex flex-col justify-center">
				<Fa icon={faMobileScreen} class={'text-white text-5xl  text-opacity-50'} />
				<h2 class="text-center text-3xl text-white mb-2 mt-4  text-opacity-50">Tworzenie aplikacji mobilnych</h2>
				<p class="text-lg text-white text-center  text-opacity-50">
					Obecnie niedostępne.
				</p>
			</div>
		</div>
		<div
			class="grid w-full grid-cols-1 grid-rows-3 lg:grid-rows-1 lg:grid-cols-3  gap-y-6 gap-x-2 lg:gap-y-2 lg:gap-x-4 text-center mt-6 "
		>
			<div class="p-8 bg-charcoal bg-opacity-80 rounded-2xl flex flex-col justify-center hover:scale-105  transition-transform cursor-pointer" on:click={() => {showModal(4)}} on:keypress={() => {showModal(4)}}>
				<Fa icon={faDesktop} class={'text-white text-5xl'} />

				<h2 class="text-center text-3xl text-white mt-4 mb-2">Tworzenie aplikacji Internetowych</h2>

				<p class="text-lg text-white text-center">
					CMS, Blog lub inne bardziej skomplikowane strony Internetowe niż prosta wizytówka.
				</p>
			</div>
			<div
				class="flex flex-col p-8 bg-opacity-80 lg:mx-4 mx-0 mb-2 lg:mb-0  bg-charcoal rounded-2xl hover:scale-105  transition-transform cursor-pointer" on:click={() => {showModal(5)}} on:keypress={() => {showModal(5)}}
			>
				<Fa icon={faNetworkWired} class={'text-white text-5xl'} />

				<div class="flex flex-col justify-between items-center h-full">
					<h2 class="text-center text-3xl text-white mb-2 mt-4">Projekt i instalacja sieci LAN</h2>
					<p class="text-lg text-white text-center">
						Projekt i instalacja bezpiecznej sieci lokalnej SOHO lub dla twojej firmy, przy użyciu najwyższej jakości sprzętu.
					</p>

				</div>
			</div>
			<div class="p-8 bg-charcoal bg-opacity-80 rounded-2xl flex flex-col justify-center hover:scale-105 transition-transform cursor-pointer" on:click={() => {showModal(6)}} on:keypress={() => {showModal(6)}}>
				<Fa icon={faRedhat} class={'text-white text-5xl'} />
				<h2 class="text-center text-3xl text-white mb-2 mt-4">Instalacja i konfiguracja serwerów Linux oraz Windows</h2>
				<p class="text-lg text-white text-center">
					Instalacja i konfiguracja różnego rodzaju usług na serwerach RHEL, RockyLinux lub Windows.
				</p>
			</div>
		</div>
	</article>
</section>
