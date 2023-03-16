import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import wappLogo from '../../public/images/wappblco_bc9zdu.png'
import igLogo from '../../public/images/instagramblco_hfgf8n.png'
import usePopUp from '../../Hooks/usePopUp';


const MenuSScreen = () => {

    const { popUpState, backdropPopUp, handlePopUp, isClosed } = usePopUp()
    const body = document.getElementById('body')

    const [openContact, setOpenContact] = useState(false)

    useEffect(() => {
        popUpState ? body.classList.add('body-fixed') : body.classList.remove('body-fixed')
    }, [popUpState, body.classList])

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })


    const handleContact = () => {
        setOpenContact(!openContact)
    }

    return (
        <>
            {
                popUpState ? backdropPopUp : ''
            }
            <span
                className="icon-menu"
                onClick={handlePopUp}
            >
                <div></div>
                <div></div>
                <div></div>
            </span>
            <nav className={`main-nav small ${isClosed ? "closed" : ""}`} id="main-nav">
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
                        >
                            <p>Contacto</p>
                            <FontAwesomeIcon icon={faChevronDown} className={
                                openContact
                                ? 'chevron-active'
                                : 'chevron-unactive'
                            } />
                            </Link>
                        <ul className={
                            openContact 
                            ? 'open'
                            : '' 
                            }
                        >
                            <li><a
                                href="https://wa.me/+5491140781149"
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
        </>
    )
}

export default React.memo(MenuSScreen)