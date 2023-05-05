import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import React, { createContext, useEffect, useState } from 'react';
import app from '../__firebase/firebase.config';
export const AuthContext=createContext(null)
const auth=getAuth(app)
const AuthProvider = ({children}) => {
    const googleProvider=new GoogleAuthProvider()
    const githubProvider=new GithubAuthProvider()

    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const loginUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }
    const resetPassword=(email)=>{
        setLoading(true)
        return sendPasswordResetEmail(auth,email)
    }
    const providerGoogle=()=>{
        return signInWithPopup(auth,googleProvider)
    }
    const providerGithub=()=>{
        return signInWithPopup(auth,githubProvider)
    }
    useEffect(()=>{
        const unsubscribe=  onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser,'auth state obserbe');
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
      },[])
    const authInfo={
        providerGoogle,
        providerGithub,
        resetPassword,
        createUser,
        loginUser,
        logOut,
        user,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
    }
    


export default AuthProvider;