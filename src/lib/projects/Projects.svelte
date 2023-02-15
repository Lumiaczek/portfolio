<script context="module">
	import { goto } from '$app/navigation';
	import Button from '$lib/Button.svelte';
</script>

<script lang="ts">
	const hydrobar = () => {
		goto('https://figiel-hydrobar.pl');
	};

	const stalmaks = () => {
		goto('https://dzwigbarlinek.pl');
	};

	const harcinfo = () => {
		goto('/projects');
	};
</script>

<section
	class="flex flex-col h-fit mt-6 lg:h-[90vh] text-center lg:text-left md:mx-auto xl:w-[92%] 2xl:w-[85%] px-6 xl:px-0 scroll-mt-20 lg:scroll-p-0"
>
	<div class="flex flex-col mt-10 mb-8 lg:mb-0 text-white font-['Josefin_Sans'] text-center">
		<div>
			<p class="text-2xl mb-2 lg:text-3xl">Moje realizacje</p>
			<h1 class="text-5xl lg:text-6xl xl:text-7xl">&lt;Projekty /&gt;</h1>
		</div>
	</div>

	<article class="flex flex-row mt-10 justify-center items-center">
		<div class="flex flex-col justify-center items-center text-white font-['Josefin_Sans']">
			<div class="flex flex-col lg:flex-row items-stretch gap-6 w-full">
				<div class="relative">
					<Button
						text=""
						icon="glassNo"
						type="dark"
						size="1.1x"
						clazz="w-fit absolute right-2 top-2"
						on:clicked={hydrobar}
					/>
					<img src="/Hydrobar.png" alt="" class="rounded-t-2xl " />
					<div class="bg-charcoal bg-opacity-90 rounded-b-2xl p-6 ">
						<h1 class="text-3xl mb-2">Hydrobar</h1>
						<p>
							Jeden z moich pierwszych projektów, zrealizowanych na zlecenie firmy Hydrobar, strona
							w formie wizytówki bazowana była jeszcze na moich starszych umiejętnościach czyli
							czystym HTML i frameworku Bulma.
						</p>
					</div>
				</div>
				<div class="relative scale-105">
					<Button
						text=""
						icon="glassNo"
						type="dark"
						size="1.1x"
						clazz="w-fit absolute right-2 top-2"
						on:clicked={harcinfo}
					/>
					<img src="/HarcInfo.png" alt="" class="rounded-t-2xl" />
					<div class="bg-charcoal bg-opacity-90  rounded-b-2xl p-6 ">
						<h1 class="text-3xl mb-2">HarcInfo</h1>
						<p>
							Jest to system zarządzania wewnętrznego mojego szczepu harcerskiego. Posiada pełen
							system logowania, autoryzacji oraz zarządzania użytkownikiem. Napisany przy użyciu
							moich najnowszych umiejętności. Całość zostala skonteneryzowana.
						</p>
					</div>
				</div>
				<div class="relative">
					<Button
						text=""
						icon="glassNo"
						type="dark"
						size="1.1x"
						clazz="w-fit absolute right-2 top-2"
						on:clicked={stalmaks}
					/>
					<img src="/Stalmaks.png" alt="" class="rounded-t-2xl" />
					<div class="bg-charcoal bg-opacity-90 rounded-b-2xl p-6 ">
						<h1 class="text-3xl mb-2">Stalmaks</h1>
						<p>
							Jeden z moich pierwszych projektów zrealizowanych dla firmy StalMaks, używałem jeszcze
							wtedy innych technologi np. Bulma i PHP ale odszedłem od nich na rzecz bardziej
							nowoczesnych, przyjaznych i wydajnych.
						</p>
					</div>
				</div>
			</div>
		</div>
	</article>
</section>
