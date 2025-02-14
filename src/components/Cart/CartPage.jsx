import React from 'react'
import CartSummery from './CartSummery'
import CartItem from './CartItem'
import styles from './CartPage.module.css'

const CartPage = () => {
  return (
    <div className={`container my-3 py-3 overflow-y-scroll`} style={{height:"80vh"}}> 
        <h5 className='mb-4 text-white'>Shopping Cart</h5>
        <div className='row'>

            <div className='col-md-8'>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
            </div>

            <CartSummery/>

        </div>
    </div>
  )
}

export default CartPage