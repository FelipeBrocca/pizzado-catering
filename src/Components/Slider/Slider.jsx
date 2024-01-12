import React, { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './Slider.css'
import slide2 from '../../public/images/slider2.webp'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
const ImageLazy = lazy(() => import('../ImageLazy/ImageLazy'))




const Slider = () => {

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

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
                        swipeScrollTolerance={50}
                        preventMovementUntilSwipeScrollTolerance={true}
                    >
                        <div className="slide-foodopt-container">
                            <ImageLazy
                                src={slide2}
                                alt="imgSlide"
                                className='image-slider'
                            />
                            <div className="slider-content">
                                <h2 className="slider-title">
                                    Cátering para tu evento
                                </h2>
                                <div className="btn draw-border">
                                    <Link
                                        className='link-slider'
                                        to={'/eventos'}
                                        onClick={scrollToTop}
                                    >Armá tu menú</Link>
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