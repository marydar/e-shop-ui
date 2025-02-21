import React from 'react'
import OrderItem from './OrderItem'
import styles from './OrderSummery.module.css'

const OrderSummery = ({cartItems, cartTotals, tax}) => {
    const total = (cartTotals + tax).toFixed(2)
  return (
    <div className='col-md-8'>
        <div className={`card mb-4 ${styles.card}`}style={{backgroundColor: '#191927'}}>
            <div className='card-header' style={{backgroundColor: '#262735', color:"white"}}>
                <h5>Cart Summary</h5>
            </div>
            <div className='card-body'>
                <div className='px-3' style={{height: '300px', overflowY: 'auto '}}>
                    {cartItems.map(item => <OrderItem key={item.id} cartItem={item}/>)}
                </div>
                <hr style={{borderColor: 'white'}}/>
                <div className='d-flex justify-content-between align-items-center'>
                    <h6 style={{color: 'white'}}>Total</h6>
                    <h6 style={{color: 'white'}}>{`$${total}`}</h6>
                </div>
            </div>
        </div>

    </div>
  )
}

export default OrderSummery