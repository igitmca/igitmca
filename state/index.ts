'use client'
import { configureStore } from "@reduxjs/toolkit";
import authReducer from '@/state/auth/slice.auth';
import googleReducer from "./google/slice.Google";
import userReducer from "./user/slice.User";
const store=configureStore({
    reducer:{
        auth: authReducer,
        user: userReducer,
        google: googleReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;


