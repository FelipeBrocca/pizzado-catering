import React, {useState, useContext, useEffect} from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../public/images/logo-pizzado-white.jpeg'
import './Header.css'
import usePopUp from '../../Hooks/usePopUp';
import { CartContext } from '../../Context/CartContext';
import Cart from '../Cart/Cart';
import useCartPopUp from '../../Hooks/useCartPopUp';


const Header = () => {

    const { popUpState, backdropPopUp, handlePopUp, isClosed } = usePopUp()
    const { cartPopUpState, backdropCartPopUp, handleCartPopUp, isCartClosed } = useCartPopUp()


    const body = document.getElementById('body')

    useEffect(() => {
        popUpState || cartPopUpState ? body.classList.add('body-fixed') : body.classList.remove('body-fixed')
    }, [popUpState, cartPopUpState])


    const [productsInCartLength, setProductsInCartLength] = useState(0)
    const {cartItems} = useContext(CartContext)

    useEffect(() => {
       setProductsInCartLength(
        cartItems.reduce((previous, current) => previous + current.quantity, 0)
       )
    }, [cartItems])

   const scrollToTop = () => window.scrollTo({ top:0 , behavior:'smooth'})


  return (
    <>
    {
        popUpState ? backdropPopUp : ''
    }
    {
        cartPopUpState ? backdropCartPopUp : ''
    }
    <header className="main-header">
        <div className="container-flex-header">
            <div className="main-header-container">
                <Link to="/" className='link-logo'>
                    <img src={Logo} className="img-logo" alt="img-logo" />
                </Link>
                <span 
                className="icon-menu" 
                onClick={handlePopUp}
                >
                <div></div>
                <div></div>
                <div></div>
                </span>
                <nav className={`main-nav ${isClosed ? "closed" : ""}`} id="main-nav">
                    <div><p onClick={handlePopUp}>X</p></div>
                    <ul className="menu">
                        <li className="menu-item">
                            <Link to="/" className="menu-link"
                            onClick={scrollToTop}
                            >Inicio</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="#morfi" className="menu-link"
                            onClick={scrollToTop}
                            >Menú</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="/eventos" className="menu-link"
                            onClick={scrollToTop}
                            >Cotizar evento</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="#redes" className="menu-link"
                            onClick={scrollToTop}
                            >Contacto</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="main-header-container" id="carrito">
                <button 
                className="button-carrito"
                onClick={handleCartPopUp}
                >
                    <div className="default-btn">
                        <span className='cart-length'><span>{productsInCartLength}</span></span>
                        <span>Ver Carrito</span>
                    </div>
                </button> 
            </div>
        </div>
    </header>
       <div className={`cart-display-container ${isCartClosed ? "closed" : ""}`}>
       <Cart
          cartPopUpState={cartPopUpState}
          handleCartPopUp={handleCartPopUp}
          cartItems={cartItems}
          />
        </div>
    </>
  )
}

export default Header