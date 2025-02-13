import React from 'react'
import { Link } from 'react-router-dom'

const NavBarLink = () => {
  return (
    <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
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
    </ul>
  )
}

export default NavBarLink