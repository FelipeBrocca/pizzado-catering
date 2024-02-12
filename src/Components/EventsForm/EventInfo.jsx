import React, { lazy, Suspense } from 'react';
import Skeleton from 'react-loading-skeleton';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { DataEvents } from './DataEvents';

const ImageLazy = lazy(() => import('../ImageLazy/ImageLazy'));

const EventInfo = () => (
  <>
    <h2 className="titulo-register">COTIZÁ TU EVENTO</h2>
    <div className="top-form">
      <p>
        Más de 500 eventos realizados: Corporativos, fiestas, cumpleaños y
        casamientos.
        <br />
        El servicio incluye a los cocineros y mozos.
        <br />
        Trabajamos en la parrilla u horno que haya en el lugar, aunque también
        tenemos nuestras parrillas movibles en caso de ser necesarias.(*)
      </p>
    </div>
    <div className="form-images-container">
      {' '}
      <Swiper
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
        modules={[Autoplay]}
      >
        {DataEvents.map(({ id, image }) => (
          <SwiperSlide key={id}>
            <Suspense fallback={<Skeleton className="swiper-suspense" />}>
              <ImageLazy
                src={image}
                alt="Event imagery"
                className="form-img-div"
              />
            </Suspense>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </>
);

export default EventInfo;
