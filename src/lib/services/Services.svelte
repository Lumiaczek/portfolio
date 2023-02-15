<script lang="ts" context="module">
	import Fa from 'svelte-fa';
	import { faWrench, faMobileScreen, faDesktop } from '@fortawesome/free-solid-svg-icons';
	import Button from '$lib/Button.svelte';
	import { goto } from '$app/navigation';
</script>

<script lang="ts">
	const seeMore = () => {
		goto('/services');
	};
</script>

<section
	class="flex flex-col h-fit lg:h-[90vh] text-center lg:text-left md:mx-auto xl:w-[92%] 2xl:w-[85%] px-6 xl:px-0 scroll-mt-20 lg:scroll-p-0"
	id="services"
>
	<div class="flex flex-col mt-8 mb-8 lg:mb-0 text-white font-['Josefin_Sans']">
		<p class="text-2xl mb-2 lg:text-3xl">Co mogę dla ciebie zrobić</p>
		<h1 class="text-5xl lg:text-6xl xl:text-7xl">&lt;Usługi /&gt;</h1>
	</div>
	<article class="lg:flex lg:flex-col lg:justify-center lg:h-full">
		<div
			class="grid w-full grid-cols-1 grid-rows-3 lg:grid-rows-1 lg:grid-cols-3  gap-y-6 gap-x-2 lg:gap-y-2 lg:gap-x-8 text-center "
		>
			<div class="p-8 bg-charcoal bg-opacity-80 rounded-2xl flex flex-col justify-center">
				<Fa icon={faDesktop} class={'text-white text-5xl'} />

				<h2 class="text-center text-3xl text-white mt-4 mb-2">Tworzenie aplikacji Internetowych</h2>

				<p class="text-lg text-white text-center">
					Oferuję tworzenie zaawansowanych aplikacji Internetowych, jak i zwykłych wizytówek dla
					ciebie lub dla twojej firmy.
				</p>
			</div>
			<div
				class="flex flex-col p-8 bg-opacity-80 lg:mx-4 mx-0 mb-2 lg:mb-0 sclae-105  bg-charcoal rounded-2xl lg:scale-110"
			>
				<Fa icon={faWrench} class={'text-white text-5xl'} />

				<div class="flex flex-col justify-between items-center h-full">
					<h2 class="text-center text-3xl text-white mb-2 mt-4">Usługi informatyczne</h2>
					<p class="text-base text-white text-center">
						Oferuję naprawę, modernizację, czyszczenie i konserwacje systemów komputerowych oraz
						projektowanie lokalnych sieci komputerowych.
					</p>
					<Button
						text="Zobacz więcej"
						icon="glass"
						type="main"
						size="1.1x"
						clazz="w-fit mt-4"
						on:clicked={seeMore}
					/>
				</div>
			</div>
			<div class="p-8 bg-charcoal bg-opacity-80 rounded-2xl flex flex-col justify-center">
				<Fa icon={faMobileScreen} class={'text-white text-5xl'} />
				<h2 class="text-center text-3xl text-white mb-2 mt-4">Tworzenie aplikacji mobilnych</h2>
				<p class="text-lg text-white text-center">
					Jestem w stanie napisać wydajną aplikacje mobilną dostosowaną do potrzeb użytkownika.
				</p>
			</div>
		</div>
	</article>
</section>
