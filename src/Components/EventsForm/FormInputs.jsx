import React, { useRef, useContext } from 'react';
import { EventContext } from '../../Context/EventContext';


const FormInputs = () => {

    const { setInfoToSend, infoToSend } = useContext(EventContext)

    const nameRef = useRef()
    const emailRef = useRef()
    const addressRef = useRef()
    const dateRef = useRef()
    const timeStartRef = useRef()
    const timeEndRef = useRef()
    const quantRef = useRef()


    const setInfo = () => {
        setInfoToSend({
            ...infoToSend,
            name: nameRef.current.value,
            email: emailRef.current.value,
            address: addressRef.current.value,
            date: dateRef.current.value,
            timeStart: timeStartRef.current.value,
            timeEnd: timeEndRef.current.value,
            quant: quantRef.current.value
        })
    }

    return (
        <>
            <div className="form-register-input">
                <input
                    type="text"
                    ref={nameRef}
                    onChange={setInfo}
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
                    onChange={setInfo}
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
                    onChange={setInfo}
                    placeholder="Direccion"
                    autoComplete='off'
                />
            </div>
            <div className="form-register-input">
                <input
                    type='date'
                    ref={dateRef}
                    onChange={setInfo}
                    dateformat='dd/MM/yyyy'
                    min='2023-01-01'
                    className='date-event'
                />
            </div>
            <div className='times-event'>
                <div className="form-register-input">
                    <label className='time-label' htmlFor='trip-start'>Desde:</label>
                    <input
                        type="time"
                        ref={timeStartRef}
                        onChange={setInfo}
                        id="start"
                        name="trip-start"
                        className='date-event'
                    />
                </div>
                <div className="form-register-input">
                    <label className='time-label' htmlFor='trip-end'>Hasta:</label>
                    <input
                        type="time"
                        ref={timeEndRef}
                        onChange={setInfo}
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
                    onChange={setInfo}
                    min={0}
                    className='quantity-event'
                    placeholder='Cantidad de invitados'
                />
            </div>
        </>
    )
}

export default FormInputs