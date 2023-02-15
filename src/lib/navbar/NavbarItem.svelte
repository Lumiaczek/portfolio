<script context="module" lang="ts">
	import { page } from '$app/stores';
</script>

<script lang="ts">
	export let text: string;
	export let route: string;
</script>

<div>
	<a
		href={`${route}`}
		class:current={route === $page.route.id}
		class="text-xl rounded-2xl py-3 px-3  hover:underline underline-offset-4 focus:ring-2 outline-none focus:ring-blue-500 active:ring-0"
		>{text}</a
	>
</div>
