import { useState, useEffect } from 'react'
import api from '../api'

function useCartData() {
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
    }, [cart_code])

    return {cartItems, setCartItems, cartTotals, setCartTotals, tax, loading}
}

export default useCartData