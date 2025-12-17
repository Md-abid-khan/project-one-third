import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
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

    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth,email);
    }

    const value = {
        createUser,
        loginUser,
        user,
        setUser,
        logOut,
        googleLogin,
        forgetPassword
    };

    return <AuthContext value={value}>{children}</AuthContext>
};

export default AuthProvider;