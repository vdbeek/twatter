<script lang="ts">

    import Avatar from "$lib/components/Avatar.svelte";
    import TwatActions from "$lib/components/TwatActions.svelte";
    
    export let avatar:string
    export let twat:string
    export let email:string
    export let username:string
    export let id:string
    export let img:string
    export let likes:string[]
</script>

<a href="/post/{id}" class="flex gap-2 border-t p-3">
    <Avatar avatarURL="{avatar}"/>
    <div class="w-full">
        <div class="flex items-center text-xl text-gray-500 gap-1">
            <h3 class="capitalize text-sm font-semibold text-white">
                {username}
            </h3>
            <p class="text-sm font-semibold">
                @{email}
            </p>
            -
            <p class="text-sm font-semibold">
                22h
            </p>
        </div>

        <p class="text-sm mb-2">
            {twat}
        </p>
        {#if img}
            <img src="{img}" alt="" class="rounded-sm mt-2 object-contain w-full">
        {/if}
        <TwatActions/>
    </div>
</a> 