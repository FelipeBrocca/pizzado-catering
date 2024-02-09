import React, { lazy, Suspense } from 'react';
import Skeleton from 'react-loading-skeleton';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { DataEvents } from './DataEvents';

const ImageLazy = lazy(() => import('../ImageLazy/ImageLazy'));

const EventInfo = () => {
  return (
    <>
      <h2 className="titulo-register">COTIZÁ TU EVENTO</h2>
      <div className="top-form">
        <p>
          Más de 500 eventos realizados: Corporativos, fiestas, cumpleanos y
          casamientos.
          <br></br>El servicio incluye a los cocineros y mozos.
          <br></br>Trabajamos en la parrilla u horno que haya en el lugar,
          aunque también tenemos nuestras parrillas movibles en caso de ser
          necesarias.(*)
        </p>
      </div>
      <div className="form-imges-container">
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
          {DataEvents.map(({ id, image }) => {
            return (
              <SwiperSlide className="form-imges-container" key={id}>
                <Suspense fallback={<Skeleton className="swiper-suspense" />}>
                  <ImageLazy src={image} alt="" className="form-img-div" />
                </Suspense>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default EventInfo;
