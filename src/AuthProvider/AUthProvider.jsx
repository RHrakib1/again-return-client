import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import React, { createContext, useState } from 'react'
import auth from '../Provider/Firebase.config'


export const AuthContext = createContext()

export default function AUthProvider({ children }) {
    const [user, setuser] = useState(null)

    const createLocalUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const usersignin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    const userinfo = {
        user,
        createLocalUser,
        usersignin

    }
    return (
        <AuthContext.Provider value={userinfo}>
            {children}
        </AuthContext.Provider>
    )
}
