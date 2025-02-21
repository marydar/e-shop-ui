import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import HomePage from './components/home/HomePage'
import NotFoundPage from './components/ui/NotFoundPage'
import ProductPage from './components/product/ProductPage'
import CartPage from './components/Cart/CartPage'
import { useState } from 'react'
import api from './api'
import CheckoutPage from './components/checkout/CheckoutPage'
import LoginPage from './components/user/LoginPage'
import ProtectedRoute from './components/ui/ProtectedRoute'

export const App = () => {

  const [numCartItems, setNumCartItems] = useState(0)
  const cart_code = localStorage.getItem("cart_code")

  useEffect(function(){
    if(cart_code){
      api.get(`get_cart_stat?cart_code=${cart_code}`)
      .then(res =>{
        console.log(res.data)
        setNumCartItems(res.data.number_of_items)
      })
      .catch(err => {
        console.log(err.message)
      })
    }
  }, [cart_code])
  return (
    <div style={{backgroundColor: '#191927'}}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout numCartItems={numCartItems}/>}>
          <Route index element={<HomePage/>} />
          <Route path="products/:slug" element={<ProductPage setNumCartItems={setNumCartItems}/>} />
          <Route path="cart" element={<CartPage setNumCartItems={setNumCartItems}/>} />
          <Route path="checkout" element={<ProtectedRoute><CheckoutPage/></ProtectedRoute>} />
          <Route path="login" element={<LoginPage/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App