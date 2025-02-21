import React from 'react'
import OrderSummery from './OrderSummery'
import PaymentSection from './PaymentSection'
import useCartData from '../../hooks/useCartData'

const CheckoutPage = () => {
    const {cartItems, setCartItems, cartTotals, setCartTotals, tax, loading} = useCartData()

  return (
    <div className='container my-3' style={{height: '100vh'}}>
        <div className='row'>
            <OrderSummery cartItems={cartItems} cartTotals={cartTotals} tax={tax}/>
            <PaymentSection/>

        </div>
    </div>
  )
}

export default CheckoutPage