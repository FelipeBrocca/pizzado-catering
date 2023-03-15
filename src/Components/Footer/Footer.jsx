import React from 'react'

import './Footer.css'
import wappLogo from '../../public/images/wappblco_bc9zdu.png'
import igLogo from '../../public/images/instagramblco_hfgf8n.png'


const Footer = () => {
    return (
    <footer>
        <div className="footer-section">
            <h2 className="footer-title">SOBRE NOSOTROS</h2>
            <p className="footer-txt">Nacidos en Agosto de 2017, Pizzado reúne lo mejor de la pizza argentina, con la mejor 
                atención al cliente. Una experiencia que no puede faltar en la mesa de tu casa para compartir con 
                toda la familia. 
            </p>
        </div>
        <div className="footer-section" id="redes">
            <h2 className="footer-title">REDES SOCIALES</h2>
            <div className='social-media-footer'>
            <a 
            href="https://wa.me/+5491140781149" 
            target="_blank" 
            rel="noreferrer"
            className="footer-link"><img src={wappLogo} alt="wapp"/></a>
            <a 
            href="https://instagram.com/pizzadocatering" 
            target="_blank" 
            rel="noreferrer"
            className="footer-link"><img src={igLogo} alt="ig"/></a>
            </div>
        </div>
        <p className="copy-footer">- 2017 Pizzado Catering - Todos los derechos reservados</p>
        <span className="copy-footer">Pagina Web realizada por 
            <span className='creators'><p>~ NicoAbdala</p><p>~ EffeBe</p></span>
        </span>
    </footer>
    )
}

export default Footer