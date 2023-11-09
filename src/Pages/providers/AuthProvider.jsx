/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react"
import { app } from "../firebase/firebase.config";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const updateUserData = (user, name) => {
        updateProfile(user, {
          displayName: name,
        })
          .then(() => {
            console.log("user profile updated");
          })
          .catch((error) => {
            console.log(error.message);
          });
      };

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log(currentUser);
            if(currentUser){
                axios.post('http://localhost:5000/jwt',{email: currentUser?.email})
                .then(res => {
                    localStorage.setItem('access-token', res.data.token);
                    setLoading(false);
                })
            }
            else{
                localStorage.removeItem('access-token');
            }
            
        });
        return () => {
            return unsubscribe();
        }
    }, []);


    const authInfo = {
        user,
        loading,
        createUser,
        updateUserData, 
        logIn,
        logOut
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider