import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../../firebase.config';

const auth = getAuth(app);

export const AuthContext = createContext();

import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        })
        return ()=>{
            unSubscribe();
        };
    },[])

    const logOut = () =>{
        return signOut(auth);
    }

    const googleLogin = () => {
        return signInWithPopup(auth,provider);
    }

    const forgetUserPassword = (email) => {
        return sendPasswordResetEmail(auth,email);
    }

    const userProfileUpdate =(info) => {
        return updateProfile(auth.currentUser, info )
    }

    const value = {
        createUser,
        loginUser,
        user,
        setUser,
        logOut,
        googleLogin,
        forgetUserPassword,
        userProfileUpdate
    };

    return <AuthContext value={value}>{children}</AuthContext>
};

export default AuthProvider;