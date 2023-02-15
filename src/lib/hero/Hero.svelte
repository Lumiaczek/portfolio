<script lang="ts" context="module">
	import { goto } from '$app/navigation';
	import Button from '$lib/Button.svelte';
	import Fa from 'svelte-fa';
	import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
	import { faFacebookSquare, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
</script>

<script lang="ts">
	const projects = () => {
		goto('/projects');
	};

	const contact = () => {
		goto('/contact');
	};
</script>

<ul class="background -z-10">
	<li />
	<li />
	<li />
	<li />
	<li />
	<li />
	<li />
	<li />
</ul>

<ul
	class="absolute mt-10 lg:bottom-0 space-x-2 lg:space-y-1 lg:space-x-0 w-full lg:w-fit lg:h-[calc(100%-84px)] flex flex-row lg:flex-col items-center justify-center lg:left-2 lg:mt-2"
>
	<li class="w-28 lg:h-28 rounded-full lg:w-0 border-[2px] lg:mb-2 border-white bg-white" />
	<li>
		<a
			href="https://www.facebook.com/daniel.borowski.1848816/"
			target="Facebook"
			aria-label="Profil Facebook"
		>
			<Fa
				icon={faFacebookSquare}
				size="2x"
				class="text-white hover:text-blue-100 focus:text-blue-100 transition-colors duration-150"
			/>
		</a>
	</li>
	<li>
		<a href="https://github.com/lumiaczek" target="Github" aria-label="Profil Github">
			<Fa
				icon={faGithubSquare}
				size="2x"
				class="text-white hover:text-blue-100 focus:text-blue-100 transition-colors duration-150"
			/>
		</a>
	</li>
	<li>
		<a
			href="https://www.linkedin.com/in/daniel-borowski-622466215/"
			target="LinkedIn"
			aria-label="Profil LinkedIn"
		>
			<Fa
				icon={faLinkedin}
				size="2x"
				class="text-white lg:mb-2 hover:text-blue-100 focus:text-blue-100 transition-colors duration-150"
			/>
		</a>
	</li>
	<li class="w-28 lg:h-28 lg:w-0 border-[2px] rounded-full border-white bg-white" />
</ul>

<section class="mt-4 lg:mt-0 text-white z-10">
	<div
		class="flex flex-col hero justify-center items-center text-center lg:text-left md:mx-auto xl:w-[92%] 2xl:w-[85%] px-6 xl:px-0"
	>
		<div class="flex flex-col lg:flex-row justify-between items-center">
			<div
				class="lg:col-start-1 flex flex-col justify-center lg:col-end-4 lg:row-start-3 lg:row-span-full bg-charcoal p-8 bg-opacity-80 rounded-2xl"
			>
				<p class="text-2xl mb-2 lg:text-3xl font-['Josefin_Sans']">&#128075; Cześć, jestem</p>
				<h1
					class="text-4xl sm:text-6xl xl:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-800 font-['Bungee']"
				>
					Daniel Borowski
				</h1>
				<p class="text-base lg:text-lg">
					Jestem Full-stack Web Developerem, czyli tworzę strony i aplikacje internetowe. <br />
					Oprócz tego zajmuję się również szeroko pojętym hardwarem i aplikacjami mobilnymi. <br />
					Jestem bardzo zaznajomiony z Linuxem którego używam na codzień.
				</p>
				<div class="flex flex-row items-center mt-8 gap-4 lg:justify-start justify-center">
					<Button
						type="main"
						text="Zatrudnij mnie"
						clazz="text-xl font-['Josefin_Sans']"
						icon={'mail'}
						size={'1.4x'}
						on:clicked={contact}
					/>
					<Button
						type="outline"
						size="1x"
						text="Zobacz projekty"
						clazz="text-xl font-['Josefin_Sans']"
						icon={'none'}
						on:clicked={projects}
					/>
				</div>
			</div>
		</div>
	</div>

	<div class="absolute bottom-2 md:bottom-5 w-full flex justify-center items-center animate-bounce">
		<a class="rounded-full bg-charcoal py-4 px-5 bg-opacity-80 cursor-pointer" href="#services">
			<Fa icon={faArrowDown} class={'text-white text-2xl'} />
		</a>
	</div>
</section>
