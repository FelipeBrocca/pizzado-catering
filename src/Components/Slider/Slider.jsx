import React, { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import './Slider.css'
import slide from '../../public/images/slider.webp'
import slide2 from '../../public/images/slider2.webp'
import slide3 from '../../public/images/slider3.webp'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Fallback from '../LazyImage/Fallback'
const Carousel = lazy(() => import('react-responsive-carousel').then(module => ({ default: module.Carousel })));
const LazyImage = lazy(() => import('../LazyImage/LazyImage'))




const Slider = () => {

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
    const handleClickScrollMenu = () => {
        const menu = document.getElementById('menu-section')
        if (menu) {
            menu.scrollIntoView({ behavior: 'smooth' })
        }

    }

    return (
        <>
            <div className='carousel-container'>
                <Suspense fallback={<Fallback />}>
                    <Carousel
                        autoPlay={true}
                        interval={10000}
                        infiniteLoop={true}
                        showThumbs={false}
                        stopOnHover={true}
                        showArrows={false}
                        dynamicHeight={true}
                        showStatus={false}
                    >
                        <div className="slide-foodopt-container">
                            <Suspense fallback={<Fallback/>}>
                                <LazyImage
                                    src={slide}
                                    alt='imgSlide'
                                    class='image-slider'
                                />
                            </Suspense>
                            <div className="slider-content">
                                <h2 className="slider-title">
                                    Las mejores pizzas en un solo lugar
                                </h2>
                                <p className="slider-text">
                                    Metelas en el frizzer y tenelas siempre a mano
                                </p>
                                <div className="btn draw-border">
                                    <Link
                                        className='link-slider'
                                        onClick={handleClickScrollMenu}
                                    >Ver Menú</Link>
                                </div>
                            </div>
                    </div>
                    <div className="slide-foodopt-container">
                        <img src={slide2} alt="imgSlide" className='image-slider' />
                        <div className="slider-content">
                            <h2 className="slider-title">
                                Catering de pizza y asado
                            </h2>
                            <p className="slider-text">
                                ¡Consultá por tu Evento!
                            </p>
                            <div className="btn draw-border">
                                <Link
                                    className='link-slider'
                                    to={'/eventos'}
                                    onClick={scrollToTop}
                                >Click Acá</Link>
                            </div>
                        </div>
                    </div>
                    <div className="slide-foodopt-container">
                        <img src={slide3} alt="imgSlide" className='image-slider' />
                        <div className="slider-content">
                            <h2 className="slider-title">
                                Hacemos catering
                            </h2>
                            <p className="slider-text">
                                Fiestas, Cumpleaños, Bautismos, Juntadas
                            </p>
                            <div className="btn draw-border">
                                <Link
                                    className='link-slider'
                                    to={'/eventos'}
                                    onClick={scrollToTop}
                                >Armá tu Presupuesto</Link>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </Suspense>
        </div>
        </>
    )
}

export default Slider