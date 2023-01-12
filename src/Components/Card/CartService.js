import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import './Card.css'
import { CartContext } from '../../Context/CartContext';



const CartService = ({id, valor, name, price, image}) => {

  const {addItemToCart} = useContext(CartContext)

  const productToCart = {
    id: 0,
    title: '',
    price: 0,
    image: image,
    quantity: 0
  }

  const setProductToCart = (() => {
    productToCart.id = id
    productToCart.title = name
    productToCart.price = price
    productToCart.quantity = valor

    addItemToCart(productToCart, productToCart.quantity)
  })
  return (
    <>          
        <button 
          className="button-card"
          onClick={setProductToCart}
          >
              <Link to="#" className="add-carrito" data-id="1">
                  <span className="button-card-txt">Agregar +</span>
                  <span>¡Dale!</span>
              </Link>
        </button>
    </>
    
  )
}

export default CartService