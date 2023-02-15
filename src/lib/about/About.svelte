<script lang="ts" context="module">
	import Svelte from '$lib/icons/Svelte.svelte';
	import Tailwind from '$lib/icons/Tailwind.svelte';
	import Expressjs from '$lib/icons/Expressjs.svelte';
	import Bio from '$lib/about/Bio.svelte';
	import Edu from '$lib/about/Edu.svelte';
	import Exp from '$lib/about/Exp.svelte';
	import { onMount } from 'svelte';
</script>

<script lang="ts">
	let current = 'Bio';
	let intersecting = false;

	const handleInterseciton = (entries: any[]) => {
		entries.map((entry) => {
			if (entry?.isIntersecting) {
				intersecting = true;
			}
		});
	};

	const opt = {
		root: null,
		rootMargin: '0px',
		threshold: 0
	};

	onMount(() => {
		const observer = new IntersectionObserver(handleInterseciton, opt);
		const target = document.getElementById('about') as HTMLElement;
		observer.observe(target);
	});

	const options = [
		{ name: 'Bio', component: Bio },
		{ name: 'Exp', component: Exp },
		{ name: 'Edu', component: Edu }
	];

	let selected = options[0];

	const changeCurrent = (name: string) => {
		current = name;

		switch (name) {
			case 'Bio':
				selected = options[0];
				break;

			case 'Exp':
				selected = options[1];
				break;

			case 'Edu':
				selected = options[2];
				break;

			default:
				selected = options[0];
				break;
		}
	};
</script>

<section
	class="flex flex-col h-fit lg:h-[90vh] text-center lg:text-left md:mx-auto xl:w-[92%] 2xl:w-[85%] px-6 xl:px-0 scroll-mt-20 lg:scroll-p-0"
	id="about"
>
	<div class="flex flex-col mt-10 mb-6 lg:mb-0 text-white font-['Josefin_Sans']">
		<p class="text-2xl mb-2 lg:text-3xl">Kim jestem?</p>
		<h1 class="text-5xl lg:text-6xl xl:text-7xl">&lt;O mnie /&gt;</h1>
	</div>

	<article class="flex flex-col lg:flex-row h-full lg:gap-4 text-white ">
		<div class="bg-charcoal bg-opacity-80 lg:my-6  lg:w-1/2 rounded-2xl p-6">
			<div class="flex flex-row items-center">
				<button
					class="about-btn"
					class:currentAbout={current === 'Bio'}
					on:click={() => {
						changeCurrent('Bio');
					}}>Bio</button
				>
				<button
					class="about-btn"
					class:currentAbout={current === 'Exp'}
					on:click={() => {
						changeCurrent('Exp');
					}}>Doświadczenie</button
				>
				<button
					class="about-btn"
					class:currentAbout={current === 'Edu'}
					on:click={() => {
						changeCurrent('Edu');
					}}>Edukacja</button
				>
			</div>
			<div class="mt-4 px-2">
				<svelte:component this={selected.component} />
			</div>
		</div>
		<div class="flex flex-col items-center lg:w-1/2 rounded-2xl py-6 space-y-2">
			<div
				class="lg:h-1/3 rounded-2xl bg-charcoal w-full bg-opacity-80 px-6 py-6 justify-center flex flex-col"
			>
				<div class="flex flex-row items-center">
					<Svelte size={'w-24 h-24 mr-4'} />
					<div class="flex flex-col w-full">
						<div class="flex flex-row justify-between items-center">
							<p class="text-3xl">Svelte</p>
						</div>
						<div class="w-full mt-1 rounded-3xl bg-white h-2.5 relative">
							<div
								class="absolute top-0 left-0 bg-blue-600 h-2.5 rounded-3xl"
								class:progressSvelte={intersecting}
							/>
						</div>
					</div>
				</div>
			</div>
			<div
				class="lg:h-1/3 rounded-2xl bg-charcoal bg-opacity-80 w-full px-6 py-6 justify-center flex flex-col"
			>
				<div class="flex flex-row items-center">
					<Tailwind size={'w-24 h-24 mr-4'} />
					<div class="flex flex-col w-full">
						<div class="flex flex-row justify-between items-center">
							<p class="text-3xl">TailwindCSS</p>
						</div>
						<div class="w-full mt-1 rounded-3xl bg-white h-2.5 relative">
							<div
								class="absolute top-0 left-0 bg-blue-600 h-2.5 rounded-3xl"
								class:progressTail={intersecting}
							/>
						</div>
					</div>
				</div>
			</div>
			<div
				class="lg:h-1/3 rounded-2xl bg-charcoal w-full px-6 bg-opacity-80 py-6 justify-center flex flex-col"
			>
				<div class="flex flex-row items-center">
					<Expressjs size={'w-24 h-24 mr-4'} />
					<div class="flex flex-col w-full">
						<div class="flex flex-row justify-between items-center">
							<p class="text-3xl">ExpressJS</p>
						</div>
						<div class="w-full mt-1 rounded-3xl bg-white h-2.5 relative">
							<div
								class="absolute top-0 left-0 bg-blue-600 h-2.5 rounded-3xl"
								class:progressExpress={intersecting}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</article>
</section>
