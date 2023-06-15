'use client'
import { createSlice } from "@reduxjs/toolkit"

type StateType ={
    name: any;
    email: any;
    batch: any;
    contact: any;
    rollNumber: any;
    registered: boolean;
    insta: any;
    company: any;
    linkedIn: any;
    profilePic: any;
    admin: any;
}
export const userInitialState:StateType = {
    name: "",
    email: "",
    contact: "",
    profilePic: "",
    rollNumber: "",
    batch: "",
    linkedIn: "",
    insta: "",
    company: "",
    registered: false,
    admin:false
}

const userSlice = createSlice({
    name: "User",
    initialState: () => {
        let localUser=undefined;
        let userData=undefined;
        if (typeof window !== 'undefined') {
             localUser = localStorage.getItem("UserAuth");
        }
        if (localUser === null) {
            return userInitialState;
        }
        if(localUser){
            userData = JSON.parse(localUser);
        }
        const {
            name, email, contact, rollNumber, profilePic, batch, linkedIn, insta, company,admin
        } = userData || {};
        return {
            name,
            email,
            batch,
            contact,
            rollNumber,
            registered: true,
            insta: insta ?? "",
            company: company ?? "",
            linkedIn: linkedIn ?? "",
            profilePic: profilePic ?? "",
            admin,
        }
    },          
    reducers: {
        setUserValue: (state, action) => {
            const {
                name, email, contact, rollNumber, profilePic, batch, linkedIn, insta, company, admin
            } = action.payload;
            localStorage.setItem("UserAuth", JSON.stringify({ name, email, contact, rollNumber, profilePic, batch, linkedIn, insta, company, admin: admin ?? false }));
            state.name = name;
            state.email = email;
            state.batch = batch;
            state.contact = contact;
            state.registered = true;
            state.insta = insta ?? "";
            state.company = company ?? "";
            state.rollNumber = rollNumber;
            state.linkedIn = linkedIn ?? "";
            state.profilePic = profilePic ?? "";
            if(admin) state.admin = admin;
        },
        emptyValue: (state) => {
            state = userInitialState;
            localStorage.removeItem("UserAuth");
        },
        updateUserData: (state, action) =>{
            const keys: Array<keyof StateType> = Object.keys(action.payload) as Array<keyof StateType>;
            console.log(state);
            keys.forEach((key: keyof StateType) => {
                state[key] = action.payload[key];
            });
            console.log(state);
        }
    },
});

const userReducer = userSlice.reducer;

export default userReducer;
export const { setUserValue, emptyValue, updateUserData } = userSlice.actions;