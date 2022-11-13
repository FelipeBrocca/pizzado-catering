import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'


import './Slider.css'
import { sliderData } from './SliderData'


const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0)
    const slideLength = sliderData.length;

    
    const autoSlide = true;
    let slideInterval;
    let intervalTime = 6000;
    
    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
    };
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
    }

    const auto = () => {
        slideInterval = setInterval(nextSlide, intervalTime)
    }

    useEffect(() => {
        setCurrentSlide(0)
    }, [])

    useEffect(() => {
        if(autoSlide){
            auto()
        }
        return () => clearInterval(slideInterval)
    }, [currentSlide, autoSlide, slideInterval])

  return (
    <>
        <section className="slider" id="slider">
            {
                sliderData.map((slide, index) => {
                    return (
                        <div className={index === currentSlide ? 'slide current-slide' : 'slide'} key={index + slide.title}>
                            {
                                index === currentSlide && (
                                    <>
                                    <img src={slide.image} alt="imgSlide" className="slider-img" />
                                        <div className="slider-content">
                                            <h2 className="slider-title">
                                                {slide.title}
                                            </h2>
                                            <p className="slider-text">
                                                {slide.subtitle}
                                            </p>                    
                                            <button className="btn draw-border">
                                                <Link to="#morfi">{slide.button}</Link>
                                            </button>
                                        </div>
                                    </>
                                )
                            }
                        </div>
                    )
                })
            }
        <div 
        className="slider-btn slider-btn-right" id="btn-right"
        onClick={nextSlide}
        >&#62;</div>
        <div 
        className="slider-btn slider-btn-left" id="btn-left"
        onClick={prevSlide}
        >&#60;</div>
        </section>
    </>
  )
}

export default Slider