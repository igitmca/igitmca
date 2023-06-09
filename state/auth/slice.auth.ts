'use client'
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: false,
    isVerifyed: false,
}

const authSlice = createSlice({
    name: 'Auth',
    initialState: () => {
        let localLoginData = undefined
        let localVerificationData = undefined
        if (typeof window !== 'undefined') {
            localLoginData = localStorage.getItem("isLoggedIn");
            localVerificationData = localStorage.getItem("isVerifyed");
        }
        if (localLoginData === null) {
            localStorage.setItem("isLoggedIn", "false");
            return initialState;
        }
        return {
            isLoggedIn: localLoginData === "true",
            isVerifyed: localVerificationData === "true",
        }
    },
    reducers: {
        userLoggedIn: (state) => {
            state.isLoggedIn = true;
            localStorage.setItem("isLoggedIn", "true");
        },
        userLoggedOut: (state) => {
            state.isLoggedIn = false;
            localStorage.clear();
            localStorage.setItem("isLoggedIn", "false");
            localStorage.setItem("isVerifyed", "false");
        },
        userVerifyed: (state) => {
            state.isVerifyed = true;
            localStorage.setItem("isVerifyed", "true");
        },
        unverifyUser: (state) => {
            state.isVerifyed = false
            localStorage.setItem("isVerifyed", "false");
        }
    }
});
const authReducer = authSlice.reducer;
export default authReducer;
export const { userLoggedIn, userLoggedOut, userVerifyed, unverifyUser } = authSlice.actions;
