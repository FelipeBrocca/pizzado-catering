import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import ReactWhatsapp from 'react-whatsapp';
import SmallConfirmEvent from './SmallConfirmEvent';


const ConfirmEvent = ({ getInfo, nameRef, emailRef, addressRef, dateRef, timeRef, quantRef, messageForm }) => {

    const [formOpen, setFormOpen] = useState(false)
    const [startDate, setStartDate] = useState(null)

    const toggleYellowForm = () => {
        setFormOpen(!formOpen)
    }

    return (
        <div className={formOpen ? 'yellow-form open' : 'yellow-form'}>
            <div className='yellow-form-small'>
                <SmallConfirmEvent 
                formOpen={formOpen}
                toggleYellowForm={toggleYellowForm}
                />
            </div>
            <div className='yellow-form-big'>
                <h2 className='title-yellow-form'>Solicitar servicio de catering:</h2>
                <p>* Al enviar este formulario, está solicitando el servicio, no es una compra definitiva. Nos estaremos contactando para confirmar definitivamente el evento</p>
                <div className="form-register-input">
                    <input 
                    type="text" 
                    ref={nameRef} 
                    onChange={getInfo} 
                    name="name" 
                    id="name" 
                    placeholder="Nombre" 
                    autoComplete='off'
                    />
                </div>
                <div className="form-register-input">
                    <input 
                    type="email" 
                    ref={emailRef} 
                    onChange={getInfo} 
                    name="email" 
                    id="email" 
                    placeholder="Email" 
                    autoComplete='off'
                    />
                </div>
                <div className="form-register-input">
                    <input 
                    type="street-address" 
                    ref={addressRef} 
                    onChange={getInfo} 
                    placeholder="Direccion" 
                    autoComplete='off'
                    />
                </div>
                <div className="form-register-input">
                    <ReactDatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        dateFormat='dd/MM/yyyy'
                        minDate={new Date()}
                        placeholderText='Fecha del evento'
                        isClearable
                    />
                </div>
                <div className='times-event'>
                    <div className="form-register-input">
                        <label className='time-label' htmlFor='trip-start'>Desde:</label>
                        <input 
                        type="time" 
                        ref={timeRef} 
                        onChange={getInfo} 
                        id="start" 
                        name="trip-start"
                        className='date-event'
                        />
                    </div>
                    <div className="form-register-input">
                        <label className='time-label' htmlFor='trip-end'>Hasta:</label>
                        <input 
                        type="time" 
                        ref={timeRef} 
                        onChange={getInfo} 
                        id="end" 
                        name="trip-end"
                        className='date-event' 
                        />
                    </div>
                </div>
                <div className="form-register-input quantity">
                    <input 
                    type="number" 
                    ref={quantRef} 
                    onChange={getInfo} 
                    min={0} 
                    className='quantity-event' 
                    placeholder='Cantidad de invitados' 
                    />
                </div>
                <ReactWhatsapp
                    number='+54 9 11 4078-1149'
                    message={messageForm}
                    className='event-form-button'
                > Solicitar servicio
                </ReactWhatsapp>
                <button className="button-cancel" type='reset'>Cancelar</button>
            </div>
        </div>
    )
}

export default ConfirmEvent