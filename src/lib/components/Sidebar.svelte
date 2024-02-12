<script>
    import {
        Bell,
        EnvelopeClosed,
        Globe,
        Home,
        MagnifyingGlass,
        Pencil1,
        Reader,
        ThickArrowLeft
    } from "radix-icons-svelte";
    import * as Avatar from "$lib/components/ui/avatar"
    import {AvatarFallback} from "$lib/components/ui/avatar";
    import Button from "$lib/components/ui/button/button.svelte";
    
    const sidebarOptions = [
        {
            icon:Home,
            title:"home",
            href:"/"
        },
        {
            icon:MagnifyingGlass,
            title:"explore",
            href:"/"
        },
        {
            icon:Bell,
            title:"notifications",
            href:"/"
        },
        {
            icon:EnvelopeClosed,
            title:"messages",
            href:"/"
        },
        {
            icon:Reader,
            title:"lists",
            href:"/"
        },
        {
            icon:Globe,
            title:"communities",
            href:"/"
        },
        {
            icon:ThickArrowLeft,
            title:"sign out",
            href:"/login",
        },
    ]
</script>

<div class="px-3 pb-2 h-screen md:flex-[0.2] md:px-2 border flex justify-between flex-col sticky z-10 top-0 left-0">
    <div class="mt-10">
        {#each sidebarOptions as {href,icon,title}}
            
        <a {href} class="flex gap-[22px] p-3 w-fit rounded-full hover:bg-white/10">
            <svelte:component this="{icon}" class="w-7 h-7"/>
            <p class="text-lg capitalize hidden md:inline-block pr-5">{title}</p>
        </a>
            
        {/each}

        <Button class="md:py-6 md:w-full">
            <Pencil1 class="md:mr-2 h-4 w-4"/>
            <span class="hidden md:inline">
            Post
        </span>
        </Button>
    </div>

    
    <div class="flex gap-2 mt-3 items-center justify-center">
        
        <Avatar.Root>
            <Avatar.Image src='./twatter.png' class="h-8 w-8" alt="user"/>
            <Avatar.Fallback>
                AVATAR
            </Avatar.Fallback>
        </Avatar.Root>
        
        <div class="hidden md:inline-block">
            <p class="font-medium capitalize">
                User
            </p>
            <p class="text-gray-500">
                email@gg.com
            </p>
        </div>
    </div>
</div>