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
                <input type="text" ref={nameRef} onChange={getInfo} name="name" id="name" placeholder="Nombre" required />
            </div>
            <div className="form-register-input">
                <input type="email" ref={emailRef} onChange={getInfo} name="email" id="email" placeholder="Email" required />
            </div>
            <div className="form-register-input">
                <input type="street-address" ref={addressRef} onChange={getInfo} placeholder="Direccion" />
            </div>
            <div className='event-and-quantity'>
                <div className="form-register-input datetime">
                    <input type="date" ref={dateRef} onChange={getInfo} id="start" name="trip-start"
                    className='date-event' min="2023-01-01" max="2200-12-31"/>
                </div>
                <div className="form-register-input datetime">
                    <input type="time" ref={timeRef} onChange={getInfo} id="start" name="trip-start"
                    className='date-event'/>
                </div>
                <div className="form-register-input datetime">
                    <input type="time" ref={timeRef} onChange={getInfo} id="start" name="trip-start"
                    className='date-event'/>
                </div>
            </div>
            <div className="form-register-input quantity">
                <input type="number" ref={quantRef} onChange={getInfo} min={0} className='quantity-event' placeholder='Invitados'/>
            </div>
            <button className= "button-cancel" type='reset'>Cancelar</button>
            <ReactWhatsapp
                number='+54 9 11 4078-1149'
                message={messageForm}
            >
                <button className="button-accept">Solicitar Servicio</button>
            </ReactWhatsapp>
        </div>
    )
}

export default ConfirmEvent