import React, { useEffect } from 'react'
import CartSummery from './CartSummery'
import CartItem from './CartItem'
import styles from './CartPage.module.css'
import api from '../../api'
import { useState } from 'react'
import Spinner from '../ui/Spinner'
import useCartData from '../../hooks/useCartData'


const CartPage = ({setNumCartItems}) => {

    const {cartItems, setCartItems, cartTotals, setCartTotals, tax, loading} = useCartData()
    
    if(loading){
        return <Spinner />
    }

    if(cartItems.length < 1){
        return (
            <div className='alert alert-primary' role='alert'>your cart is empty</div>
        )
    }
    return (
        <div className={`container my-3 py-3 overflow-y-scroll`} style={{height:"100vh"}}> 
            <h5 className='mb-4 text-white'>Shopping Cart</h5>
            <div className='row'>

                <div className='col-md-8'>
                    {cartItems.map(item => (
                        <CartItem key={item.id} item={item} cartItems={cartItems} setCartTotals={setCartTotals} setNumCartItems={setNumCartItems} setCartItems={setCartItems}/>
                    ))}
                </div>

                <CartSummery cartTotals={cartTotals} tax={tax}/>

            </div>
        </div>
    )
}

export default CartPage