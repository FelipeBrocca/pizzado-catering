import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { sliderData } from './SliderData'
import { Link } from 'react-router-dom'
import './Slider.css'


const Slider = () => {

   const scrollToTop = () => window.scrollTo({ top:0 , behavior:'smooth'})

    return (
        <div className='carousel-container'>
            <Carousel
            autoPlay={true}
            interval={5000}
            infiniteLoop={true}
            showThumbs={false}
            stopOnHover={true}
            showArrows={false}
            dynamicHeight={true}
                showStatus={false}
            >
                {
                    sliderData?.map((slide) => {
                        return(
                        <div key={slide.title} className="slide-foodopt-container">
                        <img src={slide.image} alt="imgSlide" className='image-slider' />
                            <div className="slider-content">
                                <h2 className="slider-title">
                                    {slide.title}
                                </h2>
                                <p className="slider-text">
                                    {slide.subtitle}
                                </p>                    
                                <div className="btn draw-border">
                                    <Link to={`/${slide.link}`}
                                    className='link-slider'
                                    onClick={scrollToTop}
                                    >{slide.button}</Link>
                                </div>
                            </div>
                        </div>
                    )})
                }
                </Carousel>
        </div>
    )
}

export default Slider