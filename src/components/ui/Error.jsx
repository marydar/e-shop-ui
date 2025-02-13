import React from 'react'

const Error = ({error}) => {
  return (
    <div className='alert alert-danger p-4' role="alert">{error}</div>
  )
}

export default Error