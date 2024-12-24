import { createContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';

// Create context for both Auth and Theme
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode state

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    const provider = new GoogleAuthProvider();

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    // Theme toggle function
    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light'); // Persist theme in localStorage
    };

    // Load theme from localStorage on initial load
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDarkMode(savedTheme === 'dark');
        }
    }, []);

    // Sync theme to html tag for global dark mode
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');  // Add dark class globally to <html>
        } else {
            document.documentElement.classList.remove('dark');  // Remove dark class
        }
    }, [isDarkMode]);

    const authInfo = {
        createUser,
        user,
        setUser,
        logOut,
        signInUser,
        googleLogin,
        loading,
        isDarkMode,
        toggleTheme, // Expose toggle function
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
