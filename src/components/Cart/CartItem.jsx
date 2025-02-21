import React from 'react'
import { BASE_URL } from '../../api'
import { useState } from 'react'
import api from '../../api'
import { toast } from 'react-toastify'
import { FaTrash } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";


const CartItem = ({item, setCartTotals, cartItems, setNumCartItems, setCartItems}) => {

  const [quantity, setQuantity] = useState(item.quantity)
  const itemData = {quantity: quantity, item_id: item.id}
  const [loading, setLoading] = useState(false)
  const itemId = {item_id: item.id}

  function deleteCartItem(){
    const confirmDelete = window.confirm("Are you sure you want to delete this item?")
    if(confirmDelete){
      api.post("delete_cartitem/", itemId)
      .then(res => {
        console.log(res)
        setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id))
        setNumCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id).reduce((acc, curr) => acc + curr.quantity, 0))
        setCartTotals(cartItems.filter((cartItem) => cartItem.id !== item.id).reduce((acc, curr) => acc + curr.total, 0))
        toast.success("Item deleted successfully")
      })
      .catch(err => {
        console.log(err)
        toast.error("Error deleting item")
      })
    }
  }
  function updateCartItem(){
    setLoading(true)
    api.patch("update_quantity/", itemData)
    .then(res => {
      console.log(res)
      toast.success("Item updated successfully")
      setNumCartItems(cartItems.map((cartItem) => cartItem.id === item.id ? res.data.data : cartItem).reduce((acc, curr) => acc + curr.quantity, 0))
      setCartTotals(cartItems.map((cartItem) => cartItem.id === item.id ? res.data.data : cartItem).reduce((acc, curr) => acc + curr.total, 0))
      setLoading(false)
    })
    .catch(err => {
      console.log(err)
      setLoading(false)
    })
  }
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
          min={1}
          className='form-control me-3'
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          style={{width: '70px'}}
          />
          <button 
          className='btn btn-lg mx-2 text-white' 
          // style={{backgroundColor: '#191927', color:'white'}} 
          type='button' 
          disabled={loading}
          onClick={updateCartItem}
          >
          {/* {loading ? "Updating" : "Update"} */}
          <FaCheckCircle />
          </button>
          <button className='text-white btn btn-lg' type='button' onClick={deleteCartItem}><FaTrash /></button>
        </div>
      </div>

    </div>
  )
}

export default CartItem