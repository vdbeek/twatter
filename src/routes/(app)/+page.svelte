<script lang="ts">

    import Header from "$lib/components/Header.svelte";
    import {Image} from "radix-icons-svelte";
    import {Button} from "$lib/components/ui/button";
    import Avatar from "$lib/components/Avatar.svelte";
    import TwatCard from "$lib/components/TwatCard.svelte";
    import {ref, uploadBytes, getDownloadURL} from "firebase/storage"
    import {addDoc, collection, serverTimestamp} from "firebase/firestore"
    import {db, storage} from "$lib/firebase";
    import {invalidate} from "$app/navigation";

    let twat = "";
    let loading = false
    let imgFile;
    export let data;
</script>

<Header/>

<div class="px-4 py-2 flex gap-2">
    <Avatar/>

    <div class="w-full border">
        <input
                placeholder="what is happening?"
                type="text"
                class="bg-transparent text-lg w-full outline-none px-2 h-10"
                bind:value={twat}
        />
        <div class="flex border-t py-3 justify-between items-center">
            <div class="flex gap-2 items-center">
                <input type="file" hidden id="img" accept="image/png,image/jpeg,image/gif,image/webp"/>
                <label for="img">
                    <Image class="text-primary cursor-pointer"/>
                </label>
            </div>

            <Button on:click={async()=>{
                loading = true
                let url = ''
                if(imgFile){
                    const storageRef = ref(storage,`posts/${data.userId}/${imgFile.name}`)
                    const result = uploadBytes(storageRef,imgFile)
                    url = await getDownloadURL(result.ref)
                }
                await addDoc(collection(db,"posts"),{
                    twat,
                    userId: data.userId,
                    img:url,
                    ...data.user,
                    likes:[]
                    
                })
                loading = false
                twat = ''
                await invalidate("posts")
            }}
                    disabled={twat?.length < 5 || loading}
            >
                {#if loading}
                    loading...
                {:else}
                    Post
                {/if}
            </Button>

        </div>
    </div>
</div>

{#if data.posts.length > 0}
    {#each data.posts as post}
        <TwatCard
                avatar={post.profilePic},
                email={post.email},
                img={post.img},
                username={post.name},
                twat={post.twat},
                id={post.id},
                likes={post.likes}
        />
    {/each}
{:else}
    no data
{/if}
