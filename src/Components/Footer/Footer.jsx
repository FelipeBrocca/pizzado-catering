import React from 'react';

import './Footer.css';
import wappLogo from '../../public/images/wappblco_bc9zdu.png';
import igLogo from '../../public/images/instagramblco_hfgf8n.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer-section">
        <h2 className="footer-title">SOBRE NOSOTROS</h2>
        <p className="footer-txt">
          Nacidos en agosto de 2017 y con más de 500 eventos realizados, somos
          un cátering que busca garantizar la mejor satisfacción del cliente.
          Una experiencia que no puede faltar en tu evento para compartir con
          tus invitados.
        </p>
      </div>
      <div className="footer-section" id="redes">
        <h2 className="footer-title">REDES SOCIALES</h2>
        <div className="social-media-footer">
          <a
            href="https://wa.me/+5491140781149"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            <img src={wappLogo} alt="wapp" />
          </a>
          <a
            href="https://instagram.com/pizzadocatering"
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            <img src={igLogo} alt="ig" />
          </a>
        </div>
      </div>
      <p className="copy-footer">
        - 2017 Pizzado Catering - Todos los derechos reservados
      </p>
      <span className="copy-footer">
        Pagina Web realizada por
        <span className="creators">
          <p>
            <a
              id="portfolio"
              href="https://nicoabdala.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              ~ NicoAbdala
            </a>
          </p>
          <p>
            <a
              id="portfolio"
              href="https://julimacera.dev/"
              target="_blank"
              rel="noreferrer"
            >
              ~ JuliMacera
            </a>
          </p>
          <p>
            <a
              id="portfolio"
              href="https://felipe-brocca.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              ~ EffeBe
            </a>
          </p>
        </span>
      </span>
    </footer>
  );
};

export default Footer;
