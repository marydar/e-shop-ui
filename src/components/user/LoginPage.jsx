import React from 'react'
import './LoginPage.css'
import { useState } from 'react'
import api from '../../api'
import Error from '../ui/Error'
import {useNavigate , useLocation } from 'react-router-dom'

const LoginPage = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const userInfo = {username, password}

    function handleSubmit(e){
        e.preventDefault()
        setLoading(true)
        api.post("token/", userInfo)
        .then(res => {
            console.log(res.data)
            setLoading(false)
            setError("")
            localStorage.setItem("access", res.data.access)
            localStorage.setItem("refresh", res.data.refresh)
            setUsername("")
            setPassword("")


            

            //navigate to checkout route
            // const from = location.state.from.pathname || "/";
            // navigate(from, {replace: true});
            navigate("/checkout");

        })
        .catch(err => {
            console.log(err.message)
            setLoading(false)
            setError(err.message)
        })
    }
  return (
    <div className='login-container my-5'>
        <div className='login-card shadow'>
            {error && <Error error={error}/>}
            <h2 className='login-title'>welcome back</h2>
            <p className='login-subtitle'>Please login to your account</p>
            <form className='login-form' onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='username' className='form-label'>Username</label>
                    <input type='username' value={username} onChange={(e) => setUsername(e.target.value)} className='form-control'style={{backgroundColor:"#191927", color:"white", borderColor:"#191927"}} id='email' placeholder='Enter your username' required/>
                </div>
                <div className='mb-3'>
                    <label htmlFor='password' className='form-label'>Password</label>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='form-control' style={{backgroundColor:"#191927", color:"white", borderColor:"#191927"}} id='password' placeholder='Enter your password' required/>
                </div>
                <button type='submit' className='btn-primary w-100' disabled={loading}>Login</button>
            </form>
            <div className='login-footer'>
                <p><a href='#'>Forgot Password?</a></p>
                <p>Don't have an account? <a href='#'>Sign Up</a></p>
            </div>
        </div>
    </div>
  )
}

export default LoginPage