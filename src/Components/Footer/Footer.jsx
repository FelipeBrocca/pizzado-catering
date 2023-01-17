import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

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
            <Link 
            to="https://wa.me/5491135781101" 
            target="_blank" 
            rel="noreferrer"
            className="footer-link"><img src='https://res.cloudinary.com/du2iouufy/image/upload/v1673908049/Pizzado/img-principales/wappblco_bc9zdu.png' alt="wapp"/></Link>
            <Link 
            to="https://instagram.com/pizzadocatering" 
            target="_blank" 
            rel="noreferrer"
            className="footer-link"><img src='https://res.cloudinary.com/du2iouufy/image/upload/v1673908039/Pizzado/img-principales/instagramblco_hfgf8n.png' alt="ig"/></Link>
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