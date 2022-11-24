import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { offersData } from './OffersData'
import './Offers.css'


const Offers = () => {
  return (
    <div className='offers-container'>
           <Carousel
           autoPlay={true}
           interval={5000}
           infiniteLoop={true}
           showThumbs={false}
           stopOnHover={true}
           dynamicHeight={true}
           showStatus={false}
           >
                {
                    offersData?.map((offer) => {
                        return(
                            <div className="offers-content" key={offer.title}>
                                <h2>PROMOS MUNDIALISTAS</h2>
                                <h3 className='offer-choose'>ELEGÍ TU FORMACIÓN PARA VER A LA SELECCIÓN</h3>
                                <h3 className='offer-discount'>10% OFF SÓLO EFECTIVO Y TAKEAWAY</h3>
                                <span className='offer'>
                                <h3 className="offer-title">
                                    {offer.title}
                                </h3>
                                <p className="offer-text">
                                    {offer.subtitle}
                                </p>                    
                                <p className='offer-price'>${offer.price}</p>
                                </span>        
                            </div>
                    )})
                }
            </Carousel>
</div>
  )
}

export default Offers