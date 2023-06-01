<script context="module" lang="ts">
	import Input from '$lib/login/Input.svelte';
	import Button from '$lib/Button.svelte';
	import Toast from '$lib/Toast.svelte';
	import type { ActionData } from './$types';
	import { onMount } from 'svelte';
</script>

<script lang="ts">
	export let form: ActionData;

	let toast = false;

	const showToast = () => {
		toast = true;

		setTimeout(() => {
			toast = false;
		}, 2000);
	};

	onMount(() => {
		if (form?.incorrect) {
			showToast();
		}
	});
</script>

<svelte:head>
	<title>Logowanie</title>
</svelte:head>

<section
	class="flex flex-col h-fit lg:h-[90vh] justify-center items-center md:mx-auto xl:w-[92%] 2xl:w-[85%] px-6 xl:px-0 scroll-mt-20 lg:scroll-p-0"
>
	<div class="flex flex-col px-6 py-8 bg-white rounded-xl">
		<h1 class="font-medium text-3xl text-center mb-6">Panel administracyjny</h1>
		<form method="POST" action="?/login">
			<div class="space-y-4">
				<Input htmlFor="login" type="text" text="Login" placeholder="example@example.com" />
				<Input htmlFor="password" type="password" text="Hasło" placeholder="" />
			</div>
			<div class="mt-6">
				<Button
					text="Zaloguj"
					icon="plane"
					size="1.2x"
					type="main-contact"
					ariaLabel="Zaloguj"
					clazz="w-full justify-center"
				/>
			</div>
		</form>
	</div>
</section>

{#if toast}
	<Toast status="Failed" msg="Logowanie nie powiodło się" />
{/if}
