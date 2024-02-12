<script lang="ts">
    import {Button} from "$lib/components/ui/button";
    import {auth, db} from "$lib/firebase";
    import {doc, getDoc, setDoc} from "firebase/firestore"
    import {GoogleAuthProvider, signInWithPopup} from "firebase/auth"
    import {goto} from "$app/navigation";


    const provider = new GoogleAuthProvider()
    const login = async () => {
        try {
            const {user} = await signInWithPopup(auth, provider)
            const idToken = await user.getIdToken()

            await fetch("/login", {
                method: "POST",
                body: JSON.stringify(idToken)
            });

            const userDocRef = doc(db, 'users', user.uid)
            const userDocSnap = await getDoc(userDocRef)

            if (!userDocSnap.exists()) {
                await setDoc(doc(db, 'users', user.uid), {
                    name: user.displayName,
                    email: user.email,
                    profilePic: user.photoURL,
                }, {
                    merge: true,
                })
            }
            await goto('/');
        } catch (e) {

        }
    }
    


</script>

<div class=" flex flex-col items-center justify-center h-screen w-screen border">
    <img src="../../twatter.png" alt="">
    <Button on:click={login} class="mt-4">
        Login with Google
    </Button>
</div>