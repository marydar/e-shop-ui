import React, {createContext, useState, useEffect} from 'react'

// export const AuthContext = createContext(false)
export const AuthContext = createContext({
    isAuthenticated: false,
    setIsAuthenticated: () => {}, // Default empty function to avoid errors
  });
export function AuthProvider({children}){
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const handleAuth = () => {
        const token = localStorage.getItem("access")
        if(token){
            const decoded = jwt_decode(token)
            const expiry = decoded.exp
            const currentTime = Date.now() / 1000
            if(currentTime <= expiry){

                setIsAuthenticated(true)
            }
        }
    }
    useEffect(() => {
        handleAuth()
    }, [])

    const authValue = {isAuthenticated, setIsAuthenticated}
    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    )

}