import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { offersData } from './OffersData'
import './Offers.css'
import OffersCartService from './OffersCartService';
// import { CartContext } from '../../Context/CartContext';



const Offers = () => {

    //  const {addItemToCart} = useContext(CartContext)

    //  const offerToCart = {
    //     id: 0,
    //     title: '',
    //     price: 0,
    //     image: '',
    //     quantity: 0
    //   }
    
    //   const setProductToCart = (() => {
    //     productToCart.id = id
    //     productToCart.title = name
    //     productToCart.price = price
    //     productToCart.quantity = valor
    //     productToCart.image = image
    
    //     addItemToCart(productToCart, productToCart.quantity)
    //   })

    return (
        <>
        <div className='offers-container'>
            <div className="offers-content">
                <h2>NUESTRAS PROMOS</h2>
                <h3 className='offer-choose'>ELEGÍ LA QUE MAS TE GUSTE!</h3>
                <h3 className='offer-discount'>10% OFF EN EFECTIVO Y TAKEAWAY</h3>
                <Carousel
                autoPlay={false}
                interval={8000}
                infiniteLoop={true}
                showThumbs={false}
                showArrows={false}
                stopOnHover={true}
                showStatus={false}
                >
                    {
                        offersData?.map((offer) => {
                            return(
                                <div className='text-offer-container' key={offer.id + offer.title}>
                                    <span className='offer'>
                                    <h3 className="offer-title">
                                        {offer.title}
                                    </h3>
                                    <p className="offer-text">
                                        {offer.subtitle}
                                    </p>                    
                                    <p className='offer-price'>${offer.price}</p>
                                    <OffersCartService
                                    id={offer.id}
                                    name={offer.title}
                                    price={offer.price}
                                    value={1}
                                    offer={offer.offer}
                                    />
                                    </span>
                                </div>            
                        )})
                    }
                    </Carousel>
            </div>
        </div>
    </>
    )
}

export default Offers