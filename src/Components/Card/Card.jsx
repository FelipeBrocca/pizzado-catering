import React, { lazy, Suspense, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './Card.css'
import CartService from './CartService'
const ImageLazy = lazy(() => import('../ImageLazy/ImageLazy'))


const Card = ({ image }) => {

  return (
    <>
      <div className="container-products">
        <div className="product card">
          <Suspense fallback={
            <Skeleton style={{ width: '100%', height: '150px', borderRadius: '10px' }} />
          }>
            <ImageLazy src={image} alt='card-img' className='product-img' />
          </Suspense>
        </div>
      </div>
    </>

  )
}

export default Card