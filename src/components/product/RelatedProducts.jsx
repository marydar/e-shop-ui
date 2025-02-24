import React from 'react'
import HomeCard from '../Home/HomeCard'

const RelatedProducts = ({products}) => {
  return (
    <section className='py-3' style={{ backgroundColor: '#191927' , height:'100vh'}} id='shop'>
        <div className='container px-4 px-lg-5 mt-3'>
            <h2 className='fw-bold text-white mb-4'>Related Products</h2>
            <div className='row gx-4 gx-lg-5 row-cols-2x row-cols-md-3 row-cols-xl-4 justify-content-center '>
                {products.map(product => <HomeCard key={product.id} product= {product} />)}
            </div>
        </div>

    </section>
  )
}

export default RelatedProducts