import React from 'react'

import './Footer.css'

import IGblanco from '../../public/images/instagramblco.png'
import Wappblanco from '../../public/images/wappblco.png'

const Footer = () => {
  return (
    <footer className="main-footer">
        <div className="footer-section">
            <h2 className="footer-title">Sobre Nosotros</h2>
            <p className="footer-txt">Nacidos en agosto de 2017, Pizzado reúne lo mejor de la pizza argentina con la mejor 
                atención al cliente. Una experiencia que no te puede faltar en la mesa de tu casa para compartir con 
                toda tu familia. 
            </p>
        </div>
        <div className="footer-section" id="redes">
            <h2 className="footer-title">Redes Sociales</h2>
            <div className='social-media-footer'>
            <a 
            href="https://wa.me/5491135781101" 
            target="_blank" 
            rel="noreferrer"
            className="footer-link"><img src={Wappblanco} alt="wapp"/></a>
            <a 
            href="https://instagram.com/pizzadocatering" 
            target="_blank" 
            rel="noreferrer"
            className="footer-link"><img src={IGblanco} alt="ig"/></a>
            </div>
        </div>
        <p className="copy-footer">- 2022 Pizzado Catering - Todos los derechos reservados</p>
        <span className="copy-footer">Pagina Web realizada por 
            <span className='creators'><p>~ NicoAbdala</p><p>~ EffeBe</p></span>
        </span>
    </footer>
  )
}

export default Footer