import React, {useState} from 'react'
import './Card.css'
import CartService from './CartService'



const Card = ({id, image, name, ingredients, price}) => {

  const [valor, setValor] = useState(1)

  return (
    <>
    <div className="container-products">
      <div className="product card">
          <img src={image} alt="" className="product-img" />
          <div className="product-description">
              <h3 className="product-title">{name}</h3>
              <p className="product-ingredients">({ingredients})</p>
              <span className="product-price">${price}</span>
              <div className='quantity-container'>
                  <button className="button-quantity" onClick={()=> valor > 1 ? setValor(valor - 1) : valor}>-</button>
                  <span value={valor} className='input-quantity'>{valor}</span>
                  <button className="button-quantity" onClick={()=> setValor(valor + 1)}>+</button>
              </div>
          </div>
      </div>
      <CartService 
      id = {id}
      name = {name}
      price = {price}
      image = {image}
      valor = {valor}
      />
    </div>
    </>
    
  )
}

export default Card