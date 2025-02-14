import React from 'react'
import { Link } from 'react-router-dom'

const CartSummery = () => {
  return (
    <div className='col-md-4 align-self-start'>
        <div className='card' style={{backgroundColor: '#262735'}}>
            <div className='card-body'>
                <h5 className='card-title text-white'>Cart Summery</h5>
                <hr/>
                <div className='d-flex justify-content-between text-white'>
                    <span>Subtotal</span>
                    <span>$200.00</span>
                </div>
                <div className='d-flex justify-content-between text-white'>
                    <span>Tax</span>
                    <span>$20.00</span>
                </div>
                <div className='d-flex justify-content-between mb-3 text-white'>
                    <span>Total</span>
                    <span>$220.00</span>
                </div>
                <Link to='/checkout'>
                <button 
                className='btn btn-primary w-100'
                style={{backgroundColor:' #191927', borderColor: '#262735'}}
                >
                Proceed to Checkout
                </button>
                </Link>
            </div>

        </div>

    </div>
  )
}

export default CartSummery