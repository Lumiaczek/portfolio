<script lang="ts">
	import Fa from 'svelte-fa';
	import { faUser } from '@fortawesome/free-regular-svg-icons';
	import { faLock } from '@fortawesome/free-solid-svg-icons';

	export let type: string;
	export let text: string;
	export let htmlFor = '';
	export let placeholder = '';
</script>

<div>
	<label for={htmlFor} class="block mb-0.5 text-sm font-medium text-gray-900 ">{text}</label>
	<input
		{type}
		id={htmlFor}
		name={htmlFor}
		{placeholder}
		class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
	/>
</div>
