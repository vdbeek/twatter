<script lang="ts">

    import {BarChart, ChatBubble, Heart, Loop, Share1} from "radix-icons-svelte";
</script>

<div class="flex justify-between text-sm mt-2 items-center">
    <button class="flex transition-all group items-center gap-2 text-gray-600">
        <div class="p-1 rounded-full group-hover:text-blue-500 group-hover:bg-blue-500/20">
            <ChatBubble class=""/>
        </div>
        <span class="indent-[-5px] group-hover:text-blue-500">
                    131
                </span>
    </button>
    <button class="flex transition-all group items-center gap-2 text-gray-600">
        <div class="p-1 rounded-full group-hover:text-blue-500 group-hover:bg-blue-500/20">
            <Loop class=""/>
        </div>
        <span class="indent-[-5px] group-hover:text-blue-500">
                    22
                </span>
    </button>
    <button class="flex transition-all group items-center gap-2 text-gray-600">
        <div class="p-1 rounded-full group-hover:text-blue-500 group-hover:bg-blue-500/20">
            <Heart class=""/>
        </div>
        <span class="indent-[-5px] group-hover:text-blue-500">
                    5
                </span>
    </button>
    <button class="flex transition-all group items-center gap-2 text-gray-600">
        <div class="p-1 rounded-full group-hover:text-blue-500 group-hover:bg-blue-500/20">
            <BarChart class=""/>
        </div>
        <span class="indent-[-5px] group-hover:text-blue-500">
                    122
                </span>
    </button>
    <button class="flex transition-all group items-center gap-2 text-gray-600">
        <div class="p-1 rounded-full group-hover:text-blue-500 group-hover:bg-blue-500/20">
            <Share1 class=""/>
        </div>
        <span class="indent-[-5px] group-hover:text-blue-500">
                    8
                </span>
    </button>
</div>