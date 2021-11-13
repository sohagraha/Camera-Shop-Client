import { useEffect, useState } from "react";
import initializeFirebase from "../components/Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";


initializeFirebase()

const useFirebase = () => {

    const [user, setUser] = useState({})
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth();

    const [authError, setAuthError] = useState('')
    const [admin, setAdmin] = useState(false)
    const googleProvider = new GoogleAuthProvider();
    // const [token, setToken] = useState('')



    // register user 
    const registerUser = (email, password, name, location, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError("")
                const newUser = { email, displayName: name }
                setUser(newUser)
                // save user to the database
                saveUser(email, name, 'POST')
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                const destination = location?.state?.from || '/';
                history.replace(destination)
            })
            .catch((error) => {
                setAuthError(error.message);

            })
            .finally(() => (false));
    }


    // log in user 
    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination)
                setAuthError("")

            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    const signInWithGoogle = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const destination = location?.state?.from || '/';
                history.replace(destination)
                const user = result.user;
                saveUser(user.email, user.displayName, "PUT")
                setAuthError("")
            }).catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    useEffect(() => {
        fetch(`https://safe-beach-81042.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const logout = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('https://safe-beach-81042.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(user)
        })
            .then()
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [])





    return {
        auth,
        user,
        admin,
        isLoading,
        setError,
        registerUser,
        authError,
        loginUser,
        error,
        setUser,
        signInWithGoogle,
        logout

    }

}
export default useFirebase;