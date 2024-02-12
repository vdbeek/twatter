import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {browser} from "$app/environment";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAcYko0LS9dX-jMg1ASIydwDwTuXN5SkKk",
    authDomain: "twat-86fb3.firebaseapp.com",
    projectId: "twat-86fb3",
    storageBucket: "twat-86fb3.appspot.com",
    messagingSenderId: "226260910163",
    appId: "1:226260910163:web:97e1d95e75b3c6499c06a6",
    measurementId: "G-M2NBXZ6W5M"
};

const app = initializeApp(firebaseConfig);
if(browser)
{
    const analytics = getAnalytics(app);    
}

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
