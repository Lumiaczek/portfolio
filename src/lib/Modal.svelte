<script lang="ts" context="module">
    import { createEventDispatcher } from "svelte";
    import Fa from "svelte-fa";
    import {faCircleXmark} from "@fortawesome/free-regular-svg-icons"
    import Button from "$lib/Button.svelte";
	import { goto } from "$app/navigation";
</script>

<script lang="ts">


    const dispatch = createEventDispatcher();

    export let title: string;
    export let price: string;

    const close = () => {
        dispatch('closed')

    }

    const contact = () => {
        goto('/contact')
    }
 </script>

<div class="p-8 bg-white rounded-xl shadow w-[95%] lg:w-[80%] mt-10">
    <div class="flex flex-row justify-between items-center">
            <h1 class="text-4xl">{title}</h1>
            <div on:click={close} on:keypress={close}>
            <Fa icon={faCircleXmark} class="text-black text-4xl cursor-pointer"/>
        </div>
        
    </div>
    <div class="mt-6 pt-4 border-t border-t-black text-xl"><slot/></div>
    <div class="flex flex-row justify-between items-center t-4 border-t border-t-black text-xl mt-2">
        <Button
        text={'Kontakt'}
        type={'main-contact'}
        icon={'plane'}
        size={'1.1x'}
        clazz={'mt-4'}
        on:clicked={contact}
    />
        <p class="text-3xl font-bold mt-4 text-right">{price}</p>
    </div>
</div>