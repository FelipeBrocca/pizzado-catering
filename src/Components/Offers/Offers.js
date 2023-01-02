import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { offersData } from './OffersData'
import './Offers.css'


const Offers = () => {
    return (
        <>
        <div className='offers-container'>
            <div className="offers-content">
                <h2>PROMOS MUNDIALISTAS</h2>
                <h3 className='offer-choose'>ELEGÍ TU FORMACIÓN PARA VER A LA SELECCIÓN</h3>
                <h3 className='offer-discount'>10% OFF SÓLO EFECTIVO Y TAKEAWAY</h3>
            {/* <div className='carousel-offer'> */}
                <Carousel
                autoPlay={true}
                interval={5000}
                infiniteLoop={true}
                showThumbs={false}
                stopOnHover={true}
                showStatus={false}
                >
                    {
                        offersData?.map((offer) => {
                            return(
                                <div className='text-offer-container'>
                                    <span className='offer' key={offer.title}>
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
                {/* </div> */}
            </div>
        </div>
    </>
    )
}

export default Offers