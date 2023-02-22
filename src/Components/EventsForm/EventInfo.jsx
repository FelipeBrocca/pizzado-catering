import React from 'react'
import catering1 from '../../public/images/catering1.webp'
import catering2 from '../../public/images/catering2.webp'
import catering3 from '../../public/images/catering3.webp'

const EventInfo = () => {
    return (
        <>
            <h2 className="titulo-register">Cotizá tu evento!</h2>
            <div className='top-form'>
                <p>El servicio incluye a los cocineros y mozos. <br></br>Trabajamos en la parrilla u horno que haya en el lugar, aunque también tenemos nuestras parrillas movibles en caso de ser necesarias.<br></br> Se cobra un costo de envío desde San Isidro. Los menores de 10 años pagan la mitad. Se debe abonar la logística del traslado.</p>
                <div className='form-imges-container'>
                    <div className='form-img-div'><img src={catering1} alt='catering1' /></div>
                    <div className='form-img-div'><img src={catering2} alt='catering2' /></div>
                    <div className='form-img-div'><img src={catering3} alt='catering3' /></div>
                </div>
            </div>
        </>
    )
}

export default EventInfo