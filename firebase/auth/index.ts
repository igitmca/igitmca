import {
    GoogleAuthProvider,
    signInWithPopup,
    signOut
} from "firebase/auth";
import { firebaseAuth } from "..";

const provider = new GoogleAuthProvider();



export const signInwithGooglePopup = async () => {
    try {
        const result = await signInWithPopup(firebaseAuth, provider);
        return result.user;
    } catch (err) {
        throw Error((err as Error).message)
    }
}

export const logout = async () => {
    try {
        await signOut(firebaseAuth);
    } catch (err) {
        throw Error((err as Error).message)
    }
}