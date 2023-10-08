<script context="module">
	import Fa from 'svelte-fa';
	import { faFacebookSquare, faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
</script>

<footer class="lg:h-[30vh] bg-charcoal mt-6">
	<div
		class="flex flex-col h-full justify-between items-center md:mx-auto xl:w-[92%] 2xl:w-[85%] px-6 xl:px-0 bg-charcoal text-white"
	>
		<div class="flex flex-col justify-center items-center text-center w-full py-8 px-6">
			<div>
				<h1 class="text-4xl font-['Bungee']">
					<strong class="text-medium text-blue-600">Daniel</strong> Borowski
				</h1>
				<p class="mt-1 text-xl max-w-md">
					Full-stack web developer, informatyk, entuzjasta Linuxowy, Gym rat, drużynowy ZHP, uczeń
					ZSE w Gorzowie Wielkopolskim.
				</p>
				<ul class="flex flex-row gap-4 justify-center mt-4">
					<li>
						<a
							href="https://www.facebook.com/daniel.borowski.1848816/"
							target="Facebook"
							aria-label="Profil Facebook"
						>
							<Fa
								icon={faFacebookSquare}
								size="2x"
								class="text-white hover:text-blue-800 focus:text-blue-800 transition-colors duration-150"
							/>
						</a>
					</li>
					<li>
						<a href="https://github.com/lumiaczek" target="Github" aria-label="Profil Github">
							<Fa
								icon={faGithubSquare}
								size="2x"
								class="text-white hover:text-blue-800 focus:text-blue-800 transition-colors duration-150"
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
								class="text-white lg:mb-2 hover:text-blue-800 focus:text-blue-800 transition-colors duration-150"
							/>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="bg-charcoal text-white text-xl p-4 flex flex-row justify-center">
		<div class="mx-auto xl:w-[92%] 2xl:w-[85%] px-6 xl:px-0 border-t border-gray-500">
			<div class="flex flex-row mt-3 text-center text-white font-light items-center">
				<p>Copyright &#169;2023 | Daniel Borowski | Wszelkie prawa zastrzeżone</p>
			</div>
		</div>
	</div>
</footer>
