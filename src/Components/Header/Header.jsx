import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import usePopUp from '../../Hooks/usePopUp';
import { CartContext } from '../../Context/CartContext';
import Cart from '../Cart/Cart';
import useCartPopUp from '../../Hooks/useCartPopUp';
import logo from '../../public/images/logo.webp'
import { LoadingContext } from '../../Context/LoadingContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import wappLogo from '../../public/images/wappblco_bc9zdu.png'
import igLogo from '../../public/images/instagramblco_hfgf8n.png'



const Header = () => {

    const { setLoading } = useContext(LoadingContext)
    const handleLoading = () => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }


    const { popUpState, backdropPopUp, handlePopUp, isClosed } = usePopUp()
    const { cartPopUpState, backdropCartPopUp, handleCartPopUp, isCartClosed } = useCartPopUp()


    const body = document.getElementById('body')

    useEffect(() => {
        popUpState ? body.classList.add('body-fixed') : body.classList.remove('body-fixed')
    }, [popUpState, body.classList])
    useEffect(() => {
        cartPopUpState ? body.classList.add('body-cart-fixed') : body.classList.remove('body-cart-fixed')
    }, [cartPopUpState, body.classList])


    const [productsInCartLength, setProductsInCartLength] = useState(0)
    const { cartItems } = useContext(CartContext)
    useEffect(() => {
        setProductsInCartLength(
            cartItems.reduce((previous, current) => previous + current.quantity, 0)
        )
    }, [cartItems])

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

    const contact = document.getElementById('contact-header')
    const handleContact = () => {
        contact.classList.toggle('open')
    }


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
                            <img src={logo} className="img-logo" alt="logo" onLoad={handleLoading} />
                        </Link>
                        <button
                            className="button-carrito"
                            onClick={handleCartPopUp}
                        >
                                <FontAwesomeIcon icon={faShoppingCart} className='cart-icon' />
                                <span className='cart-length'>
                                    <span>{productsInCartLength}</span>
                                </span>
                        </button>
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
                                        onClick={() => { scrollToTop(); handlePopUp() }}
                                    >Inicio</Link>
                                </li>
                                <li className="menu-item">
                                    <Link to="/eventos" className="menu-link"
                                        onClick={() => { scrollToTop(); handlePopUp() }}
                                    >Cotizar evento</Link>
                                </li>
                                <li className="menu-item contact">
                                    <Link className="menu-link"
                                        onClick={handleContact}
                                    ><p>Contacto</p><FontAwesomeIcon icon={faChevronDown} /></Link>
                                    <ul id='contact-header'>
                                        <li><a
                                            href="https://wa.me/5491135781101"
                                            target="_blank"
                                            rel="noreferrer"
                                        ><img src={wappLogo} alt="wapp" />Whatsapp</a></li>
                                        <li> <a
                                            href="https://instagram.com/pizzadocatering"
                                            target="_blank"
                                            rel="noreferrer"
                                        ><img src={igLogo} alt="ig" />Instagram</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
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