import React from 'react'
import { useState , useEffect} from 'react'
import {jwtDecode} from 'jwt-decode'
import api from '../../api'
import Spinner from './Spinner'
import { Navigate } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const [isAuthorized, setIsAuthorized] = useState(false)
    const location = useLocation()
    const navigate = useNavigate()

    
    useEffect(function(){
        // auth().catch(() => setIsAuthorized(false))  
        auth()
        console.log("authorized : ", isAuthorized)
    }, [isAuthorized])

    async function refreshToken(){
        const refreshed_token = localStorage.getItem("refresh")
        try{
            const res = await api.post("/token/refresh", {
                refresh: refreshed_token,
            });
            if(res.status === 200){
                localStorage.setItem("access", res.data.access)
                setIsAuthorized(true)
            }
            else{
                setIsAuthorized(false)
            }
        }
        catch(err){
            console.log(err)
        }
    }

    //when page is rendered
    async function auth(){
        const token = localStorage.getItem("access")
        if(!token){
            setIsAuthorized(false)
            return
        }
        const decoded = jwtDecode(token)
        const expiry_date = decoded.exp
        const current_time = Date.now() / 1000
        console.log("current time : ", current_time)
        console.log("expiry date : ", expiry_date)
        if(current_time > expiry_date){
            await refreshToken()
        }
        else{
            console.log("else : ", true)
            setIsAuthorized(true)
            // navigate("/checkout")
        }
    }
    //when is loading
    // if (isAuthorized === null){
    //     <Spinner />
    // }
    

  return (
    <>
    {isAuthorized ? children : <Navigate to='/login' state={{from: location}} replace/>}
    </>
  )
}

export default ProtectedRoute