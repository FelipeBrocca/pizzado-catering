import React, {useContext, useEffect, useState} from 'react'
import { CartContext } from '../../Context/CartContext';
import ReactWhatsapp from 'react-whatsapp';
import './Cart.css'



const Cart = ({cartPopUpState, handleCartPopUp, cartItems}) => {

  const total = cartItems.reduce((previous, current) => previous + current.quantity * current.price, 0)
  const [itemsForMessage, setItemsForMessage] = useState([])
  const body = document.getElementById('body')
  cartPopUpState ? body.classList.add('body-fixed') : body.classList.remove('body-fixed')

  const {addItemToCart, subtractItemInCart, deleteItemInCart} = useContext(CartContext)

  useEffect(() => {
     setItemsForMessage([...cartItems])
    }, [cartItems])

  const messageToWA = itemsForMessage.map(item => `x${item.quantity} - ${item.title} - $${item.price} c/u.`)
  const messageFriendlyString = messageToWA.join('\n')

  return (
    <>
    <div className='cart-top'>
        <h2>Carrito de compras</h2>
        <div
        className='close-cart'
        onClick={handleCartPopUp}
        >X</div>
    </div>
    <div className='cart-contain'>
      {
        !cartItems[0] ? <p>No hay productos en el carrito</p> :
        cartItems.map((item) => {
            return(
                <div className='item-in-cart' key={item.title + item.size}>
                    <div className='image-item-in-cart'>
                        <img src={item.image} alt={`${item.image}`} />
                    </div>
                    <div className='div2-cart'>
                    <p>{item.title}</p>
                    <div className='quantity-cart'>
                    <button
                     className='button-quantity-cart'
                    onClick={() => subtractItemInCart(item)}
                    >-</button>
                    <p>{item.quantity}</p>
                    <button
                     className='button-quantity-cart'
                    onClick={() => addItemToCart(item, 1)}
                    >+</button>
                    </div>
                    </div>
                    <div className='div3-cart'>
                    <button
                    className='delete-in-cart'
                    onClick={() => deleteItemInCart(item)}
                    > Quitar
                    </button>
                    <p className='price-item-cart'>${item.price * item.quantity}</p>
                    </div>
                </div>
            )
        })
      }
    </div>
    <div className='cart-bottom'>
        <h3>Total: ${total}</h3>
        <ReactWhatsapp 
        className='button-whatsapp'
        number='++54 9 11 4078-1149'
        message={`Hola! Quiero iniciar la compra de: \n\n${messageFriendlyString} \n\n Total: $${total}`}
        ><p>Iniciar compra</p>
          </ReactWhatsapp>
    </div>
    </>
  )
}

export default Cart