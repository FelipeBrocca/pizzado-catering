import React, { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './Slider.css'
import slide from '../../public/images/slider.webp'
import slide2 from '../../public/images/slider2.webp'
import slide3 from '../../public/images/slider3.webp'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
const ImageLazy = lazy(() => import('../ImageLazy/ImageLazy'))




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
                <Suspense fallback={<Skeleton className='slider-suspense' />}>
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
                            <div className="slider-content">
                                <h2 className="slider-title">
                                    Las pizzas mas ricas están acá
                                </h2>
                                <p className="slider-text">
                                    Metelas en el freezer y tenelas siempre a mano
                                </p>
                                <div className="btn draw-border">
                                    <Link
                                        className='link-slider'
                                        onClick={handleClickScrollMenu}
                                    >Ver menú</Link>
                                </div>
                            </div>
                            <ImageLazy
                                src={slide}
                                alt='imgSlide'
                                className='image-slider'
                            />
                        </div>
                        <div className="slide-foodopt-container">
                            <ImageLazy
                                src={slide2}
                                alt="imgSlide"
                                className='image-slider'
                            />
                            <div className="slider-content">
                                <h2 className="slider-title">
                                    Cátering de pizza y asado
                                </h2>
                                <p className="slider-text">
                                    ¡Consultá por tu Evento!
                                </p>
                                <div className="btn draw-border">
                                    <Link
                                        className='link-slider'
                                        to={'/eventos'}
                                        onClick={scrollToTop}
                                    >Click acá</Link>
                                </div>
                            </div>
                        </div>
                        <div className="slide-foodopt-container">
                            <ImageLazy
                                src={slide3}
                                alt="imgSlide"
                                className='image-slider' />
                            <div className="slider-content">
                                <h2 className="slider-title">
                                    Hacemos cátering
                                </h2>
                                <p className="slider-text">
                                    Fiestas, Cumpleaños, Bautismos, Juntadas, <br></br> y lo que se te ocurra
                                </p>
                                <div className="btn draw-border">
                                    <Link
                                        className='link-slider'
                                        to={'/eventos'}
                                        onClick={scrollToTop}
                                    >Armá tu presupuesto</Link>
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