import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'
const Card = ({image, title, ingredients, price}) => {

  return (
    <>
    <section className="container-products">
      <div className="product card">
          <img src={image} alt="" className="product-img" />
          <div className="product-description">
              <h3 className="product-title">{title}</h3>
              <p className="product-ingredients">Ingredientes: {ingredients}</p>
              <span className="product-price">${price}</span>
          </div>
          <button className="button-card">
              <Link to="#" className="add-carrito" data-id="1">
                  <span className="button-card-txt">Agregar +</span>
                  <span>¡Dale!</span>
              </Link>
          </button>
      </div>
    </section>
    </>
    
  )
}

export default Card