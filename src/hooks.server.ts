import type {Handle} from "@sveltejs/kit";
import {adminAuth} from "$lib/server/firebaseAdmin";

export const handle = (async ({event,resolve}) => {
    const sessionCookie = event.cookies.get("__session")
    try{
        const decodedClaims = await adminAuth.verifySessionCookie(sessionCookie!)
        event.locals.userID = decodedClaims.uid
        
    } catch (e) {
        event.locals.userID = null
        return resolve(event)
    }
    
    const res = await resolve(event)
    return res
}) satisfies Handle;