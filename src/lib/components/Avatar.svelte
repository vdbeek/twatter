<script lang="ts">
    import * as Avatar from "$lib/components/ui/avatar"
    import {AvatarFallback} from "$lib/components/ui/avatar";
    
    export let avatarURL:string
</script>

<Avatar.Root>
    <Avatar.Image src='{avatarURL}' class="h-8 w-8" alt="user"/>
    <Avatar.Fallback>
        AVATAR
    </Avatar.Fallback>
</Avatar.Root>
