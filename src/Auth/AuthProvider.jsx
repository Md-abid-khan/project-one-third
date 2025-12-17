import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../../firebase.config';

const auth = getAuth(app);

export const AuthContext = createContext();


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

    const value = {
        createUser,
        loginUser,
        user,
        setUser,
        logOut
    };

    return <AuthContext value={value}>{children}</AuthContext>
};

export default AuthProvider;