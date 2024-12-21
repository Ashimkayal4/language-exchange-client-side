import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () => {
        return signOut(auth)
    }


    const provider = new GoogleAuthProvider();

    const googleLogin = () => {
       return signInWithPopup(auth,provider)
    }


    const authInfo = {
        createUser,
        user,
        setUser,
        logOut,
        signInUser,
        googleLogin
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })

        return () => {
            unsubscribe()
        }
    })
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;