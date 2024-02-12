<script lang="ts">
    
import Searchbar from "$lib/components/Searchbar.svelte";
import Card from "$lib/components/Card.svelte";
import {Button} from "$lib/components/ui/button";
</script>

<div class="px-5 flex-[0.6] hidden md:inline-block border py-2 space-y-4">
    <Searchbar/>
    <Card let:Title>
        <Title>
            Subscribe to premium
        </Title>
        <p slot="content">
            ultrices quaerendum error maiorum adolescens his error intellegebat docendi usu ridiculus porro epicurei adipisci maiestatis
        </p>
        <Button slot="action">
            Subscribe
        </Button>
    </Card>
    
    <Card let:Title>
        <Title>
            Trends for you
        </Title>
        <div slot="content">
            {#each {length: 7} as _}
                
                <div class="space-y-1 cursor-pointer rounded py-2 hover:bg-gray-800">
                    <div class="flex items-center gap-1 text-xs text-gray-500">
                        <p>
                            Music
                        </p>
                        <p>
                            Trending
                        </p>
                    </div>

                    <p class="font-black text-sm capitalize">
                        davido
                    </p>
                    <p class="text-xs text-gray-500">
                        255.5k
                    </p>
                </div>
                
            {/each}
        </div>
    </Card>
</div>