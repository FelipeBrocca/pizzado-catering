import React, { lazy, Suspense } from 'react';
import Skeleton from 'react-loading-skeleton';
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
        <br />
        El servicio incluye a los cocineros y mozos.
        <br />
      </p>
    </div>
    <div className="form-images-container">
      <div className="image-grid">
        {DataEvents.map(({ id, image }) => (
          <div key={id} className="image-grid-item">
            <Suspense fallback={<Skeleton className="image-suspense" />}>
              <ImageLazy
                src={image}
                alt="Event imagery"
                className="form-img-div"
              />
            </Suspense>
          </div>
        ))}
      </div>
    </div>
  </>
);

export default EventInfo;
