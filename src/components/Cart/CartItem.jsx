import React from 'react'
import { BASE_URL } from '../../api'


const CartItem = ({item}) => {
  return (
    <div className='col-md-12'>
      {/* cart items */}
      <div
      className='cart-item d-flex align-items-center mb-3 p-3'
      style={{backgroundColor: '#262735', borderRadius: '8px'}}
      >
        <img
        src={`${BASE_URL}${item.Product.image}`}
        alt='product image'
        className='img-fluid'
        style={{width: '80px', height: '80px', objectFit: 'cover', borderRadius: '5px'}}
        />
        <div className='ms-3 flex-grow-1'>
          <h5 className='mb-1 text-white'>{item.Product.name}</h5>
          <p className='mb-0 text-white'>{`$${item.total}`}</p>
        </div>
        <div className='d-flex align-items-center'>
          <input
          type='number'
          className='form-control me-3'
          defaultValue={item.quantity}
          style={{width: '70px'}}
          />
          <button className='btn btn-danger btn-sm' type='button'>Remove</button>
        </div>
      </div>

    </div>
  )
}

export default CartItem