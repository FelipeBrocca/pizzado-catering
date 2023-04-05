import React, {useContext} from 'react'
import { CartContext } from '../../Context/CartContext';
import './Offers.css'


const OffersCartService = ({id, value, name, price, offer}) => {

    const {addItemToCart} = useContext(CartContext)
  
    const productToCart = {
      id: 0,
      title: '',
      price: 0,
      quantity: 0,
      offer: []
    }
  
    const setProductToCart = (() => {
      productToCart.id = id
      productToCart.title = name
      productToCart.price = price
      productToCart.quantity = value
      productToCart.offer = name
  
      addItemToCart(productToCart, productToCart.quantity)
    })
    return (
      <>          
          <button 
            className='add-offer-button'
            onClick={setProductToCart}
            >
            Agregar al carrito
          </button>
      </>
      
    )
  }
  
  export default OffersCartService
