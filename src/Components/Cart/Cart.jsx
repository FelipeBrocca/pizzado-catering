import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../Context/CartContext';
import ReactWhatsapp from 'react-whatsapp';
import './Cart.css'



const Cart = ({ cartPopUpState, handleCartPopUp, cartItems }) => {

  const total = cartItems.reduce((previous, current) => previous + current.quantity * current.price, 0)
  const [itemsForMessage, setItemsForMessage] = useState([])
  const body = document.getElementById('body')
  cartPopUpState ? body.classList.add('body-fixed') : body.classList.remove('body-fixed')

  const { addItemToCart, subtractItemInCart, deleteItemInCart } = useContext(CartContext)

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
              return (
                <div className='item-in-cart' key={item.title + item.size}>
                  <div className={item.image ? 'image-item-in-cart' : 'no-image-in-item'}>
                    <img src={item.image} alt={`${item.image}`} />
                  </div>
                  <div className='div2-cart'>
                    {
                      item.offer ? <p>PROMO {item.title}<br></br><small>(
                        {
                          item.offer.map((offer) => {
                            return (
                              <small>{offer.quantity + ' ' + offer.name}, </small>
                            )
                          })
                        }
                        )</small></p> : <p>{item.title}</p>
                    }
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
                    {/* <button
                    className='delete-in-cart'
                    onClick={() => deleteItemInCart(item)}
                    > Vaciar
                    </button> */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='delete-in-cart'
                    onClick={() => deleteItemInCart(item)}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
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
          message={`Hola! Quiero pedirles: \n\n${messageFriendlyString} \n\n Total: $${total}`}
        ><p>Comprar</p>
        </ReactWhatsapp>
      </div>
    </>
  )
}

export default Cart