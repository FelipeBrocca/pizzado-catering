import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom';
import ReactWhatsapp from 'react-whatsapp';


const ConfirmEvent = ({ getInfo, nameRef, emailRef, addressRef, dateRef, timeRef, quantRef, messageForm }) => {

    const [formOpen, setFormOpen] = useState(false)

    const toggleYellowForm = () => {
        setFormOpen(!formOpen)
    }

    return (
        <div className={formOpen ? 'yellow-form open' : 'yellow-form'}>
            <div className='yellow-form-small'>
                <div
                    className={formOpen ? 'button-close-form' : 'button-open-form'}
                    id='button-open-form'
                    onClick={toggleYellowForm}
                >{formOpen ? 'X' : 'Solicitar servicio'}
                </div>
            </div>
            <h2>Solicitar servicio de catering:</h2>
            <p>* Al enviar este formulario, está solicitando el servicio, no es una compra definitiva. Nos estaremos contactando para confirmar definitivamente el evento</p>
            <div className="form-register-input">
                <label>Nombre completo</label>
                <input type="text" ref={nameRef} onChange={getInfo} name="name" id="name" placeholder="Ej.: Juan Perez" required />
            </div>
            <div className="form-register-input">
                <label>Email</label>
                <input type="email" ref={emailRef} onChange={getInfo} name="email" id="email" placeholder="email@tuemail.tu" required />
            </div>
            <div className="form-register-input">
                <label>Dirección</label>
                <input type="street-address" ref={addressRef} onChange={getInfo} placeholder="Av. Falsa 123, Palermo" />
            </div>
            <div className='event-and-quantity'>
                <div className="form-register-input datetime">
                    <label>Fecha del evento</label>
                    <input type="date" ref={dateRef} onChange={getInfo} id="start" name="trip-start"
                        className='date-event'
                        min="2023-01-01" max="2200-12-31" />
                </div>
                <div className="form-register-input datetime">
                    <label>Hora del evento</label>
                    <input type="time" ref={timeRef} onChange={getInfo} id="start" name="trip-start"
                        className='date-event' />
                </div>
            </div>
            <div className="form-register-input quantity">
                <label>Cantidad de invitados</label>
                <input type="number" ref={quantRef} onChange={getInfo} min={0} className='quantity-event' />
            </div>
            <button type='reset'>Cancelar</button>
            <ReactWhatsapp
                className="button-card"
                number='+54 9 11 4078-1149'
                message={messageForm}
            >
                <span className="button-card-txt"> Solicitar servicio </span>
                <span>¡Dale!</span>
            </ReactWhatsapp>
        </div>
    )
}

export default ConfirmEvent