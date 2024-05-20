import React from 'react';
import { useState, useEffect } from 'react';
import './OfferPopUp.css';
import wappLogo from '../../public/images/wappblco_bc9zdu.png';
import logoPizzado from '../../public/images/logo-f-negro.webp';

const OfferPopUp = () => {
  // This state controls whether the pop-up is visible
  const [showPopup, setShowPopup] = useState(false);

  const whatsappMesssage = 'Hola! Quiero más información y mi postre gratis 👀';

  useEffect(() => {
    const checkLastVisit = () => {
      const lastVisit = localStorage.getItem('lastVisit');
      const currentTime = new Date().getTime();
      const thirtyDaysInMilliseconds = 15 * 24 * 60 * 60 * 1000;

      if (!lastVisit || currentTime - lastVisit > thirtyDaysInMilliseconds) {
        // Set timeout to show the popup after 40 seconds
        setTimeout(() => {
          setShowPopup(true);
          // Update the last visit time in localStorage
          localStorage.setItem('lastVisit', currentTime);
        }, 25000); // 25000 milliseconds = 25 seconds
      }
    };

    checkLastVisit();
  }, []);

  return (
    <div>
      {showPopup && (
        <div className="offer-pop-up">
          <div className="offer-left">
            <h4>ANTES DE IRTE...</h4>
            <div className="offer-details">
              <p>
                Si cotizás ahora tu <strong>PRIMER</strong> presupuesto con
                nosotros, te <strong>REGALAMOS</strong> el postre para tu evento
              </p>
            </div>
            <div className="wapp-button">
              <img src={wappLogo} alt="wapp" />
              <a
                href={`https://api.whatsapp.com/send?phone=5491140781149&text=${whatsappMesssage}`}
                target="_blank"
                rel="noreferrer"
              >
                ¡LO QUIERO!
              </a>
            </div>
          </div>
          <div className="offer-right container">
            <div className="offer-title-container">
              <img src={logoPizzado} alt="logo-pizzado" />
              <h4>POSTRE GRATIS</h4>
              <p>
                Solicitá tu presupuesto <strong>AHORA</strong> y te regalamos el
                postre
              </p>
            </div>
          </div>
          <div
            className="offer-close"
            onClick={() => {
              setShowPopup(false);
            }}
          >
            x
          </div>
        </div>
      )}
    </div>
  );
};

export default OfferPopUp;
