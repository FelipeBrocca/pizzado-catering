import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../public/images/logo-pizzado-white.jpeg'
import './Header.css'
import usePopUp from '../../Hooks/usePopUp';


const Header = () => {

    const { popUpState, backdropPopUp, handlePopUp, isClosed } = usePopUp()

    const body = document.getElementById('body')
    popUpState ? body.classList.add('body-fixed') : body.classList.remove('body-fixed')

  return (
    <>
    {
        popUpState ? backdropPopUp : ''
    }
    <header className="main-header">
        <div className="container-flex-header">
            <div className="main-header-container">
                <span 
                className="icon-menu" 
                onClick={handlePopUp}
                >
                <div></div>
                <div></div>
                <div></div>
                </span>
                <Link to="/" className='link-logo'>
                    <img src={Logo} className="img-logo" alt="img-logo" />
                </Link>
                <nav className={`main-nav ${isClosed ? "closed" : ""}`} id="main-nav">
                    <div><p onClick={handlePopUp}>X</p></div>
                    <ul className="menu">
                        <li className="menu-item">
                            <Link to="/" className="menu-link">Inicio</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="#morfi" className="menu-link">Menú</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="#events" className="menu-link">Tu Evento</Link>
                        </li>
                        <li className="menu-item">
                            <Link to="#redes" className="menu-link">Contacto</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="main-header-container" id="carrito">
                <button className="button-carrito">
                    <div className="default-btn">
                        <svg className="css-i6dzq1" strokeLinejoin="round" strokeLinecap="round" fill="none" strokeWidth="2" stroke="#FFF" height="20" width="20" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle r="3" cy="12" cx="12"></circle></svg>
                        <span>Mi Carrito</span>
                    </div>
                    <div className="hover-btn">
                        <svg className="css-i6dzq1" strokeLinejoin="round" strokeLinecap="round" fill="none" strokeWidth="2" stroke="#000" height="20" width="20" viewBox="0 0 24 24"><circle r="1" cy="21" cx="9"></circle><circle r="1" cy="21" cx="20"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                        <span>Shop Now</span>
                    </div>
                </button> 
            </div>
        </div>
    </header>
    </>
  )
}

export default Header