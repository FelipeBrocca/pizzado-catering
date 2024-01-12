import React from 'react'
import "./Testimonials.css"
import { Data } from './Data';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
    return (
        <section className="testimonial container section">
            <h2 className='section__title'>Lo que dicen los clientes</h2>
            <Swiper 
                className="testimonial__container" 
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                speed={2000}
                grabCursor={true}
                spaceBetween={10}
                pagination={{
                clickable: true,
            }}
            breakpoints={{
                576: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 48,
                },
            }}
            modules={[Pagination, Autoplay]}>

            {Data.map(({id, image, title, description}) => {
                return (
                    <SwiperSlide className='testimonial__card' key={id}>
                        <img src={image} alt="" className='testimonial__img'/>
                        <h3 className="testimonial__name">{title}</h3>
                        <p className="testimonial__description">{description}</p>
                    </SwiperSlide>
                );
            })}
            </Swiper>
        </section>
    )
}

export default Testimonials
