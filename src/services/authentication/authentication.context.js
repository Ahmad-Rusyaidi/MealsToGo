import React, {useState, createContext } from "react";
import { FIREBASE_AUTH } from "../../config/firebase"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { loginRequest, registerRequest } from "./authentication.service";

const auth = FIREBASE_AUTH;

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({children}) => {

    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    onAuthStateChanged(auth, (usr) => {
        if(usr) {
            setUser(usr);
            setIsLoading(false);
        } else {
            setIsLoading(false);
        }
    })

    const onLogin = (email, password) => {
        
        loginRequest(email, password).then((u) => {
            setUser(u);
            setIsLoading(false);
        }).catch((e) => {
            setIsLoading(false);
            setError(e.toString());
        });
    };

    const onRegister = async (email, password, repeatedPassword) => {
        setIsLoading(true);
        if(password !== repeatedPassword){
            setError("Error: Passwords do not match");
            return;
        }

        setIsLoading(true);
        registerRequest(email, password).then((u) => {
            setUser(u);
            setIsLoading(false);
        }).catch((e) => {
            setIsLoading(false);
            setError(e.toString());
        })
    };

    const onLogout = () => {
        signOut(auth).then(() => {
            setUser(null);
            console.log("Logout");
        }).catch((error) => {
            console.log(error);
            throw error;
        });
    };

    return (
        <AuthenticationContext.Provider
            value={{
                isAuthenticated: !!user,
                user,
                isLoading,
                error,
                onLogin,
                onRegister,
                onLogout,
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    )
};