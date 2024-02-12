<script lang="ts">
    
import Sidebar from "$lib/components/Sidebar.svelte";
import Rightside from "$lib/components/Rightside.svelte";
import {MagnifyingGlass} from "radix-icons-svelte";
</script>

<div class="flex border w-full max-w-6xl">
    <Sidebar/>
    <main class="min-h-screen flex-1">
        <slot/>    
    </main>
    <Rightside/>
</div>



<!-- 
 
<script lang="ts">
</script>

<div class="">
</div>

 -->