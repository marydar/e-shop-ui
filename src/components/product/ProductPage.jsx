import React, { useEffect, useState } from 'react'
import ProductPagePlaceHolder from './ProductPagePlaceHolder'
import RelatedProducts from './RelatedProducts'
import { useParams } from 'react-router-dom'
import api from '../../api'
import { BASE_URL } from '../../api'

const ProductPage = () => {

    const {slug} = useParams()
    const [product, setProduct] = useState({})
    const [similarProducts, setSimilarProducts] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(function(){
        setLoading(true)
        api.get(`product_detail/${slug}`).then(res => {
            console.log(res.data)
            setProduct(res.data)
            setSimilarProducts(res.data.similar_products)
            setLoading(false)
        })
        .catch(err =>{
            console.log(err.message)
            setLoading(false)
        })

    }, [slug])

    if(loading){
        return <ProductPagePlaceHolder />
    }
  return (
    <div>
        {/* <ProductPagePlaceHolder /> */}
        <section className='py-3 text-white'>
        <div className='container px-4 px-lg-5 my-5'>
            <div className='row gx-4 gx-lg-5 align-items-center '>
                <div className='col-md-6'>
                    <img
                    className='card-img-top mb-5 mb-md-0'
                    src={`${BASE_URL}${product.image}`}
                    alt=''
                    />
                </div>
                <div className='col-md-6'>
                    <div className='small mb-1'>SKU: BST-498</div>
                    <h1 className='display-5 fw-bold'>{product.name}</h1>
                    <div className='fs-5 mb-5'>
                        <span > {`$${product.price}`}</span>
                    </div>
                    <p className='lead'>
                        {product.description}
                    </p>
                    <div className='d-flex'>
                        <button className='btn btn-outline-light flex-shrink-0 text-white' type ='button'>
                            <i className='me-1 bi-cart-fill'></i>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <RelatedProducts products = {similarProducts}x/>
    </div>
  )
}

export default ProductPage