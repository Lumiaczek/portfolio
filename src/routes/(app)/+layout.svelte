<script context="module">
	import Loader from '$lib/Loader.svelte';
	import { navigating } from '$app/stores';
	import Navbar from '$lib/navbar/Navbar.svelte';
</script>

<script lang="ts">
	import '../../app.css';
</script>

<svelte:head>
	<meta
		name="description"
		content="Witaj na mojej personalnej stronie, gdzie możesz dowiedzieć się nieco więcej o mnie oraz zatrudnić mnie do swojego projektu."
	/>
</svelte:head>

<Navbar />
<slot />
