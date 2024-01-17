import React, { lazy, Suspense, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './Card.css'
import CartService from './CartService'
const ImageLazy = lazy(() => import('../ImageLazy/ImageLazy'))


const Card = ({ id, image, name, ingredients, price }) => {

  const [valor, setValor] = useState(1)

  return (
    <>
      <div className="container-products">
        <div className="product card">
          <Suspense fallback={
            <Skeleton style={{ width: '100%', height: '150px', borderRadius: '10px' }} />
          }>
            <ImageLazy src={image} alt='card-img' className='product-img' />
          </Suspense>
          <div className="product-description">
            <h3 className="product-title">{name}</h3>
            <p className="product-ingredients">({ingredients})</p>
            <span className="product-price">${price}</span>
            <div className='quantity-container'>
              <button className="button-quantity" onClick={() => valor > 1 ? setValor(valor - 1) : valor}>-</button>
              <span value={valor} className='input-quantity'>{valor}</span>
              <button className="button-quantity" onClick={() => setValor(valor + 1)}>+</button>
            </div>
          </div>
        </div>
        <CartService
          id={id}
          name={name}
          price={price}
          image={image}
          valor={valor}
        />
      </div>
    </>

  )
}

export default Card