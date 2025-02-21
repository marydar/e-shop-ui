import React, { useEffect } from 'react'
import CartSummery from './CartSummery'
import CartItem from './CartItem'
import styles from './CartPage.module.css'
import api from '../../api'
import { useState } from 'react'
import Spinner from '../ui/Spinner'


const CartPage = ({setNumCartItems}) => {

    const cart_code = localStorage.getItem("cart_code")
    const [cartItems, setCartItems] = useState([])
    const [cartTotals, setCartTotals] = useState(0.00)
    const tax = 40.0
    const [loading, setLoading] = useState(false)
    useEffect(function(){
        setLoading(true)
        if(cart_code){
            api.get(`get_cart?cart_code=${cart_code}`)
            .then(res =>{
                console.log(res.data)
                setCartItems(res.data.items)
                setCartTotals(res.data.sum_total)
                setLoading(false)
            })
            .catch(err => {
                console.log(err.message)
                setLoading(false)
            })
        }
    }, [])
    if(loading){
        return <Spinner />
    }

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
                        <CartItem key={item.id} item={item} cartItems={cartItems} setCartTotals={setCartTotals} setNumCartItems={setNumCartItems} setCartItems={setCartItems}/>
                    ))}
                </div>

                <CartSummery cartTotals={cartTotals} tax={tax}/>

            </div>
        </div>
    )
}

export default CartPage