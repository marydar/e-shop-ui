import React, { use } from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'

const NavBarLink = () => {
    const {isAuthenticated, username, setIsAuthenticated, setUsername} = useContext(AuthContext)
    const navigate = useNavigate()
    

    function logout(){
        localStorage.removeItem("access")
        localStorage.removeItem("refresh")
        setIsAuthenticated(false)
        setUsername("")
        navigate("/")
    }
  return (
    <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
        {isAuthenticated ?
        <>
            <li className='nav-item'>
                <NavLink
                    to="/profile"
                    className={({isActive}) => isActive ? 'nav-link active fw-semibold text-white' : 'nav-link fw-semibold text-white'}end
                >{username}</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink
                    to="/"
                    className={({isActive}) => isActive ? 'nav-link active fw-semibold text-white' : 'nav-link fw-semibold text-white'}end
                    onClick={logout}
                >Logout</NavLink>
            </li>
        </>
        :
            <>
                <li className='nav-item'>
                    <NavLink
                        to="/login"
                        className={({isActive}) => isActive ? 'nav-link active fw-semibold text-white' : 'nav-link fw-semibold text-white'}end
                    >Login</NavLink>
                </li>
                <li className='nav-item'>
                    <NavLink
                        to="/login"
                        className={({isActive}) => isActive ? 'nav-link active fw-semibold text-white' : 'nav-link fw-semibold text-white'}end
                    >Signup</NavLink>
                </li>
            </>
        }
        
    </ul>
  )
}

export default NavBarLink

{/* <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
        <li className='nav-item'>
            <a className='nav-link active fw-semibold text-white' href='#!'>Home</a>
        </li>
        <li className='nav-item'>
            <Link to="/profile" className='nav-link fw-semibold text-white' href='#!'>Shop</Link>
        </li>
        <li className='nav-item'>
            <a className='nav-link fw-semibold text-white' href='#!'>About</a>
        </li>
        <li className='nav-item'>
            <a className='nav-link fw-semibold text-white' href='#!'>Contact</a>
        </li>
    </ul> */}