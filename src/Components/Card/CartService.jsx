import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import './Card.css'
import { CartContext } from '../../Context/CartContext';



const CartService = ({ id, valor, name, price, image }) => {

  const { addItemToCart } = useContext(CartContext)
  const [added, setAdded] = useState(false)

  const productToCart = {
    id: 0,
    title: '',
    price: 0,
    image: '',
    quantity: 0
  }

  const handleAdd = () => {
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1000);
  };

  const setProductToCart = (() => {
    productToCart.id = id
    productToCart.title = name
    productToCart.price = price
    productToCart.quantity = valor
    productToCart.image = image

    handleAdd()

    addItemToCart(productToCart, productToCart.quantity)
  })
  return (
    <>
      <button
        className="button-card"
        onClick={setProductToCart}
      >
        <Link to="#" className="add-carrito" data-id="1">
          <span className={`button-card-txt ${added ? 'adding' : ''}`}>{
          added ? 'Dale!' : 'Agregar'
          }</span>
        </Link>
      </button>
    </>

  )
}

export default CartService