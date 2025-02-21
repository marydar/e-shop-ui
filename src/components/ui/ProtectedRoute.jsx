import React, { Children } from 'react'
import { useState , useEffect} from 'react'
import {jwtDecode} from 'jwt-decode'
import api from '../../api'
import Spinner from './Spinner'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = () => {
    const [isAuthorized, setIsAuthorized] = useState(null)
    const location = useLocation()

    useEffect(function(){
        auth().catch(() => setIsAuthorized(false))  
    }, [])

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
        if(current_time > expiry_date){
            await refreshToken()
        }
        else{
            setIsAuthorized(true)
        }
    }
    //when is loading
    if (isAuthorized === null){
        <Spinner />
    }
    

  return (
    isAuthorized ? Children : <Navigate to='/login' state={{from: location}} replace/>
  )
}

export default ProtectedRoute