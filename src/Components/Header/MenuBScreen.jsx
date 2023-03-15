import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import igLogo from '../../public/images/instagramblco_hfgf8n.png'
import wappLogo from '../../public/images/wappblco_bc9zdu.png'

const MenuBScreen = () => {

    const [openContact, setOpenContact] = useState(false)

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
    
    const handleContact = () => {
        setOpenContact(!openContact)
    }

return (
    <>
        <nav className='main-nav-big-screen' >
            <ul className="menu big">
                <li className="menu-item big">
                    <Link to="/" className="menu-link big"
                        onClick={() => { scrollToTop() }}
                    >Inicio</Link>
                </li>
                <li className="menu-item big">
                    <Link to="/eventos" className="menu-link big"
                        onClick={() => { scrollToTop() }}
                    >Cotizar evento</Link>
                </li>
                <li className="menu-item big contact">
                <Link className="menu-link big"
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

export default React.memo(MenuBScreen)