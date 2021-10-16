import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.initialize";

initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
       return signInWithPopup(auth, googleProvider);        
    }

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
            setError('');
        })
            .catch(error => {
                setError(error.message);
        })
    }

    //obsers whether user state change or not

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
        return unsubscribe;
    }, [auth]);

    return {
        user,
        error,
        signInUsingGoogle,
        logOut
    }

}

export default useFirebase;