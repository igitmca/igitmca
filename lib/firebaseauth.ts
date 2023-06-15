import { userLoggedIn, userLoggedOut, userVerifyed } from '@/state/auth/slice.auth';
import { resetAtLogout, setAtLogin } from '@/state/google/slice.Google';
import { useAppDispatch } from '@/state/hooks';
import { User, onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react'
import { FireStoreCollection } from '../firebase/firestore/collection';
import { setUserValue } from '@/state/user/slice.User';
import { firebaseAuth } from '../firebase';


const formatAuthUser = (user: User) => ({
    uid: user.uid,
    email: user.email
});

export default function useFirebaseAuth() {
    const dispatch = useAppDispatch();
    const [authUser, setAuthUser] = useState<User | null>();
    const [loading, setLoading] = useState(true);

    // listen for Firebase state change
    useEffect(() => {
        const unSub = checkAuthState();
        return () => {
            unSub();
        };
    }, []);
    const fetchDataOfTheUser = async (googleEmail: string) => {
        const userCollection = new FireStoreCollection("User");
        try {
            const userData = await userCollection.getSingleDoc(googleEmail);
            const {
                batch,
                company,
                contact,
                email,
                insta,
                linkedIn,
                name,
                profilePic,
                rollNumber,
                verifyed,
                admin,
            } = userData;
            // if the user is verifyed then set it
            if (verifyed) dispatch(userVerifyed());
            dispatch(
                setUserValue({
                    batch,
                    company,
                    contact,
                    email,
                    insta,
                    linkedIn,
                    name,
                    profilePic,
                    admin,
                    rollNumber,
                })
            );
        } catch (error) {
            console.log(error)
        }
    }
    const checkAuthState = () => {
        const unSubscribe = onAuthStateChanged(firebaseAuth, async (user) => {
            // if user is loggin in then there will be something in the object otherwise null
            setLoading(true)
            try {
                if (user) {
                    setAuthUser(user);
                    setLoading(false);
                    const {
                        displayName,
                        emailVerified,
                        isAnonymous,
                        photoURL,
                        email,
                        uid,
                    } = user;
                    // Get the access token using getIdToken
                    const accessToken = await user.getIdToken();
                    // save things to state.Google
                    dispatch(
                        setAtLogin({
                            accessToken,
                            displayName,
                            emailVerified,
                            isAnonymous,
                            photoURL,
                            email,
                            uid,
                        })
                    );
                    // 
                    if (email) {
                        await fetchDataOfTheUser(email);
                        dispatch(userLoggedIn());
                    }
                    setLoading(false);
                } else {
                    setAuthUser(null)
                    setLoading(false)
                    return;
                    throw Error("Uesr not login");
                    // dispatch(resetAtLogout());
                    // dispatch(userLoggedOut());
                }
            } catch (error) {
                dispatch(resetAtLogout());
                dispatch(userLoggedOut());
            }
        });
        return unSubscribe;
    };

    return {
        authUser,
        loading
    };
}