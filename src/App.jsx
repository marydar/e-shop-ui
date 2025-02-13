import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import HomePage from './components/home/HomePage'
import NotFoundPage from './components/ui/NotFoundPage'
import ProductPage from './components/product/ProductPage'

export const App = () => {
  return (
    <div style={{backgroundColor: '#191927'}}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage/>} />
          <Route path="products/:slug" element={<ProductPage/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App