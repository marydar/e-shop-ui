import React, { useEffect } from 'react'
import CartSummery from './CartSummery'
import CartItem from './CartItem'
import styles from './CartPage.module.css'
import api from '../../api'
import { useState } from 'react'


const CartPage = () => {

    const cart_code = localStorage.getItem("cart_code")
    const [cartItems, setCartItems] = useState([])
    const [cartTotal, setCartTotals] = useState(0.00)
    const tax = 40.0
    useEffect(function(){
        if(cart_code){
            api.get(`get_cart?cart_code=${cart_code}`)
            .then(res =>{
                console.log(res.data)
                setCartItems(res.data.items)
                setCartTotals(res.data.sum_total)
            })
            .catch(err => {
                console.log(err.message)
            })
        }
    }, [])

    if(cartItems.length < 1){
        return (
            <div className='alert alert-primary' role='alert'>your cart is empty</div>
        )
    }
    return (
        <div className={`container my-3 py-3 overflow-y-scroll`} style={{height:"80vh"}}> 
            <h5 className='mb-4 text-white'>Shopping Cart</h5>
            <div className='row'>

                <div className='col-md-8'>
                    {cartItems.map(item => (
                        <CartItem key={item.id} item={item}/>
                    ))}
                </div>

                <CartSummery cartTotal={cartTotal} tax={tax}/>

            </div>
        </div>
    )
}

export default CartPage