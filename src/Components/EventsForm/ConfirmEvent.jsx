import React, { useContext } from 'react'
import ReactWhatsapp from 'react-whatsapp';
import SmallConfirmEvent from './SmallConfirmEvent';
import { EventContext } from '../../Context/EventContext';
import FormInputs from './FormInputs';



const ConfirmEvent = () => {

    const {
        messageForm,
        infoToSend,
        formOpen,
        resetForm
    } = useContext(EventContext)

    return (
        <div className={formOpen ? 'yellow-form open' : 'yellow-form'}>
            <div className='yellow-form-small'>
                <SmallConfirmEvent />
            </div>
            <div className='yellow-form-big'>
                <h2 className='title-yellow-form'>Solicitar servicio de catering:</h2>
                <p>* Al enviar este formulario, está solicitando el servicio, no es una compra definitiva. Nos estaremos contactando para confirmar definitivamente el evento</p>
                <div className='form-includes'>
                    <h4>Incluye: </h4>
                    <ul className='form-includes-list'>
                        {
                            infoToSend.menu?.map((menu) => {
                                return (
                                    <li className='includes-opt' key={menu}><p>{menu}</p></li>
                                )
                            })
                        }
                        {
                            infoToSend.entrada?.map((entrada) => {
                                return (
                                    <li className='includes-opt' key={entrada}><p>{entrada}</p></li>
                                )
                            })
                        }
                        {
                            infoToSend.bebida?.map((bebida) => {
                                return (
                                    <li className='includes-opt' key={bebida}><p>{bebida}</p></li>
                                )
                            })
                        }
                        {
                            infoToSend.postre?.map((postre) => {
                                return (
                                    <li className='includes-opt' key={postre}><p>{postre}</p></li>
                                )
                            })
                        }
                    </ul>
                </div>
                <FormInputs />
                <ReactWhatsapp
                    number='+54 9 11 4078-1149'
                    message={messageForm}
                    className='event-form-button'
                > Solicitar servicio
                </ReactWhatsapp>
                <button
                    className="button-cancel"
                    onClick={(e) => resetForm(e)}
                    type='reset'
                >Cancelar</button>
            </div>
        </div>
    )
}

export default ConfirmEvent