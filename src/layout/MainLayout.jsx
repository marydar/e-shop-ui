import React from 'react'
import Navbar from '../components/ui/Navbar'
import Footer from '../components/ui/Footer'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = ({numCartItems}) => {
  return (
    <>
    <Navbar numCartItems={numCartItems}/>
    <ToastContainer toastStyle={{ backgroundColor: '#262735', color: 'white' }} />
    <Outlet />
    <Footer />
    </>
  )
}

export default MainLayout