import React, {useState
  // , useContext
} from 'react'
import { Link } from 'react-router-dom'
import './Card.css'
// import { CartContext } from '../../Context/CartContext';



const Card = ({image, title, ingredients, price}) => {

  // const {addItemToCart} = useContext(CartContext)
  const [valor, setValor] = useState(1)


  return (
    <>
    <div className="container-products">
      <div className="product card">
          <img src={image} alt="" className="product-img" />
          <div className="product-description">
              <h3 className="product-title">{title}</h3>
              <p className="product-ingredients">Ingredientes: {ingredients}</p>
              <span className="product-price">${price}</span>
              <div className='quantity-container'>
                  <button className="button-quantity" onClick={()=> valor > 1 ? setValor(valor - 1) : valor}>-</button>
                  <span value={valor} className='input-quantity'>{valor}</span>
                  <button className="button-quantity" onClick={()=> setValor(valor + 1)}>+</button>
              </div>
          </div>
      </div>
          <button 
          className="button-card"
          >
              <Link to="#" className="add-carrito" data-id="1">
                  <span className="button-card-txt">Agregar +</span>
                  <span>¡Dale!</span>
              </Link>
          </button>
    </div>
    </>
    
  )
}

export default Card