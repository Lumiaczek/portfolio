<script context="module">
	import Logo from './Logo.svelte';
	import NavbarItem from './NavbarItem.svelte';
	import { goto } from '$app/navigation';
</script>

<script lang="ts">
	import Button from '$lib/Button.svelte';

	let hidden = true;

	const toggleMenu = () => {
		hidden = !hidden;
	};

	const contact = () => {
		goto('/contact');
	};
</script>

<nav class="py-4 px-4 sticky z-50 top-0 left-0 bg-charcoal bg-opactiy-80 text-white">
	<div
		class="flex lg:flex-row flex-col justify-between items-center w-full md:mx-auto xl:w-[92%] 2xl:w-[85%]"
	>
		<div class="flex flex-row justify-between w-full lg:w-fit">
			<Logo />
			<svg
				on:click={toggleMenu}
				on:keypress={toggleMenu}
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-8 h-8 lg:hidden cursor-pointer"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
				/>
			</svg>
		</div>
		<div
			class="lg:flex lg:flex-row flex-col items-center gap-1 space-y-6 lg:space-y-0 shadow-xl rounded-xl justify-center lg:justify-start lg:shadow-none w-full lg:w-fit mt-2 lg:mt-0 px-4 py-8 lg:p-0 self-center"
			class:hidden
		>
			<NavbarItem route={'/'} text={'Strona główna'} />
			<NavbarItem route={'/services'} text={'Usługi'} />
			<Button
				text={'Kontakt'}
				type={'main'}
				icon={'plane'}
				size={'1.1x'}
				clazz={'lg:ml-2'}
				on:clicked={contact}
			/>
		</div>
	</div>
</nav>
