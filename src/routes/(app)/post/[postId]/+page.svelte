<script lang="ts">

    import {ArrowBottomLeft} from "radix-icons-svelte";
    import Avatar from "$lib/components/Avatar.svelte";
    import {Button} from "$lib/components/ui/button";
    import TwatActions from "$lib/components/TwatActions.svelte";
    import TwatCard from "$lib/components/TwatCard.svelte";
</script>

<header class="p-4 flex items-center gap-3">
    <ArrowBottomLeft/>
    <h1 class="capitalize font-semibold text-lg">
        post
    </h1>
    <p></p>
</header>

<div>
    <div class="px-4">
        <div class="flex justify-between">
            <div class="flex gap-2">
                <Avatar/>
                <div>
                    <p class="capitalize font-semibold">
                        user
                    </p>
                    <p class="text-sm text-gray-500">
                        @handle
                    </p>
                </div>
            </div>
            <Button class="capitalize" variant="secondary">
                follow
            </Button>
        </div>

        <p>
            indoctum pro recteque movet primis ridens morbi eos metus efficiantur dicant venenatis ad ignota rhoncus
            dicunt viris lectus sumo senserit aliquip fabulas verterem quam potenti libero tota adipiscing animal vero
            natoque libris pericula pertinax quas varius nec eius esse interdum aliquet omittam singulis principes alia
            orci disputationi intellegebat eam veritus quis phasellus rhoncus ius nec feugiat platea porta quam vel
            varius potenti natoque prodesset vim doming suavitate vulputate dolores libero varius definitiones
            deseruisse vel varius tincidunt movet euripidis expetendis finibus.
        </p>
        <img src="../../twatter.png" alt="">
        <TwatActions/>
      
    </div>
    <div class="flex gap-2 px-4 py-3">
        <Avatar/>
        <input type="text" placeholder="Write a comment" class="bg-transparent flex-1">
    </div>
    <div>
        {#each {length: 8} as _}
            <TwatCard/>
        {/each}
    </div>
</div>