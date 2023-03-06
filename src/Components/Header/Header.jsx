import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { CartContext } from '../../Context/CartContext';
import Cart from '../Cart/Cart';
import useCartPopUp from '../../Hooks/useCartPopUp';
import logo from '../../public/images/logo.webp'
import { LoadingContext } from '../../Context/LoadingContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import MenuSScreen from './MenuSScreen';
import MenuBScreen from './MenuBScreen';



const Header = () => {

    const { setLoading } = useContext(LoadingContext)
    const handleLoading = () => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }


    const { cartPopUpState, backdropCartPopUp, handleCartPopUp, isCartClosed } = useCartPopUp()


    const body = document.getElementById('body')

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

    return (
        <>
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
                        <MenuSScreen />
                        <MenuBScreen />
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