import React, {createContext, useState, useEffect} from 'react'
import {jwtDecode} from 'jwt-decode'
import api from '../../api';

// export const AuthContext = createContext(false)
export const AuthContext = createContext({
    isAuthenticated: false,
    setIsAuthenticated: () => {}, // Default empty function to avoid errors
  });
//   export
export function AuthProvider({children}){
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [username, setUsername] = useState("")
    const handleAuth = () => {
        const token = localStorage.getItem("access")
        if(token){
            const decoded = jwtDecode(token)
            const expiry = decoded.exp
            const currentTime = Date.now() / 1000
            if(currentTime <= expiry){

                setIsAuthenticated(true)
            }
        }
    }

    function get_username(){
        api.get("get_username")
        .then(res => {
            setUsername(res.data.username)
        }) 
        .catch(err => {
            console.log(err)
        })
    }
    useEffect(() => {
        handleAuth()
        get_username()
    }, [])

    const authValue = {isAuthenticated, setIsAuthenticated, username, setUsername, get_username}
    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    )

}