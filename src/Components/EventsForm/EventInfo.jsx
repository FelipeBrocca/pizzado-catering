import React, { lazy, Suspense } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { DataEvents } from './DataEvents';

const LazyInfoImages = lazy(() => import('./LazyInfoImages'))

const EventInfo = () => {
    return (
        <>
            <h2 className="titulo-register">COTIZÁ TU EVENTO</h2>
            <div className='top-form'>
                <p>
                    Más de 500 eventos realizados: Corporativos, fiestas, cumpleanos y casamientos.
                    <br></br>El servicio incluye a los cocineros y mozos. 
                    <br></br>Trabajamos en la parrilla u horno que haya en el lugar, aunque también tenemos nuestras parrillas movibles en caso de ser necesarias.(*)
                </p>
                {/* <div className='form-imges-container'>
                    <div className='form-img-div'>
                        <Suspense fallback={
                            <Skeleton className='form-img-skeleton' />
                        }>
                            <LazyInfoImages src={catering1} alt='catering1' />
                        </Suspense>
                    </div>
                    <div className='form-img-div'>
                        <Suspense fallback={
                            <Skeleton className='form-img-skeleton' />
                        }>
                            <LazyInfoImages src={catering2} alt='catering2' />
                        </Suspense>
                    </div>
                    <div className='form-img-div'>
                        <Suspense fallback={
                            <Skeleton className='form-img-skeleton' />
                        }>
                            <LazyInfoImages src={catering3} alt='catering3' />
                        </Suspense>
                    </div>
                </div> */}
                <section className="">
                    <Swiper 
                        className="img-container-events" 
                        loop={true}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        speed={2000}
                        grabCursor={true}
                        spaceBetween={10}
                        pagination={{
                        clickable: true,
                        }}
                        breakpoints={{
                            448: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 12,
                            },
                        }}
                        modules={[Autoplay]}>

                        {DataEvents.map(({id, image}) => {
                            return (
                                <SwiperSlide className='form-imges-container' key={id}>
                                    <img src={image} alt="" className='form-img-div'/>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </section>
            </div>
        </>
    )
}

export default EventInfo