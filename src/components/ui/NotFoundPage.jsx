import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <header className='py-3 my-5' style={{ backgroundColor: '#262735' }}>
        <div className='container px-4 px-lg-5 my-5'>
            <div className='text-center text-white'>
                <h1 className='display-4 fw-bold'>Page Not Found!</h1>
                <p className='lead fw-normal txet-white-75 mb-4'>The page you tried to access does not exist.</p>
                <Link to='/' className='btn btn-light btn-lg rounded-pill px-4 py-2'>Back to Home</Link>
            </div>

        </div>
    </header>
  )
}

export default NotFoundPage