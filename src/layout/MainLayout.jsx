import React from 'react'
import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = ({numCartItems}) => {
  return (
    <>
    <Navbar numCartItems={numCartItems}/>
    <Outlet />
    <Footer />
    </>
  )
}

export default MainLayout