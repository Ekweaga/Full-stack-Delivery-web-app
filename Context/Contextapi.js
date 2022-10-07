import { createContext,useState,useEffect } from "react";
import { onAuthStateChanged,getAuth } from "firebase/auth";
import { auth } from "../Firebase/firbase";

export const AuthContext = createContext()

export const AuthProvider = ({children})=>{

    const [user,setUser] = useState({})
    const auth = getAuth()

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            setUser(user)
            
        })
    },[auth])
    return(
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
}
