import React from 'react'
import { BASE_URL } from '../../api'

const OrderItem = ({cartItem}) => {
  return (
    <div className='d-flex justify-content-between align-items-center mb-3 px-3' style={{backgroundColor: '#262735', borderRadius: '10px'}}>
        <div className='d-flex align-items-center'>
            <img
                src={`${BASE_URL}${cartItem.Product.image}`}
                alt='Product'
                className='img-fluid my-3'
                style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '10px' }}
            />
            <div className='ms-3'>
                <h6 className='mb-0' style={{color: 'white'}}>{cartItem.Product.name}</h6>
                <small style={{color: 'white'}}>{`Quantity: ${cartItem.quantity}`}</small>
            </div>
        </div>
        <h6 style={{color: 'white'}}>{`$${cartItem.Product.price}`}</h6>

    </div>
  )
}

export default OrderItem