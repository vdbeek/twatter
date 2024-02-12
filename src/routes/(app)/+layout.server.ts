import {doc, getDoc} from "firebase/firestore";
import {db} from "$lib/firebase";
import {error, redirect} from "@sveltejs/kit";

export const load = async({locals}) => {
    const userId = locals.userID
    
    if(!userId){
        throw redirect(303,"/login")
    }
    const getUser = async(uid:string) => {
        try{
            const docRef=doc(db,"users",uid)
            const docSnap = await getDoc(docRef)
            return docSnap.data()
        } catch (e) {
            throw error(400,"an error occured")
        }
    }
    return {
        userId,
        user:getUser(userId!)
    }
}