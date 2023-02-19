import React, { useContext, useState, useRef } from 'react'
import ReactWhatsapp from 'react-whatsapp';
import SmallConfirmEvent from './SmallConfirmEvent';
import { EventContext } from '../../Context/EventContext';



const ConfirmEvent = () => {

    const [formOpen, setFormOpen] = useState(false)
    const { messageForm, message, infoToSend, setInfoToSend, setMessage, menu, entrada, bebida, postre } = useContext(EventContext)


    const nameRef = useRef()
    const emailRef = useRef()
    const addressRef = useRef()
    const dateRef = useRef()
    const timeStartRef = useRef()
    const timeEndRef = useRef()
    const quantRef = useRef()


    const toggleYellowForm = () => {
        setFormOpen(!formOpen)
    }

    const setInfo = () => {
        setInfoToSend({
            name: nameRef.current.value,
            email: emailRef.current.value,
            address: addressRef.current.value,
            date: dateRef.current.value,
            timeStart: timeStartRef.current.value,
            timeEnd: timeEndRef.current.value,
            quant: quantRef.current.value,
            menu: menu ? menu?.map((menu) => menu) : 'Sin especificar',
            entrada: entrada ? entrada?.map((entrada) => entrada) : 'Sin especificar',
            postre: postre ? postre?.map((postre) => postre) : 'Sin especificar',
            bebida: bebida ? bebida?.map((bebida) => bebida) : 'Sin especificar'
        })
        setMessage(infoToSend)
        console.log(message);
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
                <ReactWhatsapp
                    number='+54 9 11 4078-1149'
                    message={messageForm}
                    className='event-form-button'
                > Solicitar servicio
                </ReactWhatsapp>
                <button
                    className="button-cancel"
                    type='reset'
                    onClick={() => setMessage({
                        name: '',
                        email: '',
                        address: '',
                        date: '',
                        timeStart: '',
                        timeEnd: '',
                        quant: '',
                        entrada: [],
                        menu: [],
                        postre: [],
                        bebida: []
                    })}
                >Cancelar</button>
            </div>
        </div>
    )
}

export default ConfirmEvent