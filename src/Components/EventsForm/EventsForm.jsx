import React, { useContext } from 'react'
import ConfirmEvent from './ConfirmEvent';
import EventOption from './EventOption';
import { EventContext } from '../../Context/EventContext'
import { Bebidas, Entradas, PizzaClassic, PizzaPremium, AsadoClassic, AsadoPremium, Hamburguesas, EmpanadasClassic, Postres } from './EventsCateringData';
import './EventsForm.css'

const EventsForm = () => {

    const {
        handleChangeBebida,
        handleChangeEntrada,
        handleChangeMenu,
        handleChangePostre,
        infoToSend
    } = useContext(EventContext)


    return (
        <form className="form-register" id='form-event'>
            <fieldset className='form-register-input'>
                <legend>Elegí tus combos.<br></br><small>(Todos los precios son por persona)</small></legend>
                <div className='combo-section'>
                    <h3>Pizzas</h3>
                    {
                        PizzaClassic.map((option) => {
                            return (
                                <EventOption
                                    option={option}
                                    handleChange={handleChangeMenu}
                                    key={option.title}
                                />
                            )
                        })
                    }
                    {
                        PizzaPremium.map((option) => {
                            return (
                                <EventOption
                                    option={option}
                                    handleChange={handleChangeMenu}
                                    key={option.title}
                                />
                            )
                        })
                    }
                </div>
                <div className='combo-section'>
                    <h3>Asado</h3>
                    {
                        AsadoClassic.map((option) => {
                            return (
                                <EventOption
                                    option={option}
                                    handleChange={handleChangeMenu}
                                    key={option.title}
                                />
                            )
                        })
                    }
                    {
                        AsadoPremium.map((option) => {
                            return (
                                <EventOption
                                    option={option}
                                    handleChange={handleChangeMenu}
                                    key={option.title}
                                />
                            )
                        })
                    }
                </div>
                <div className='combo-section'>
                    <h3>Hamburguesas</h3>
                    {
                        Hamburguesas.map((option) => {
                            return (
                                <EventOption
                                    option={option}
                                    handleChange={handleChangeMenu}
                                    key={option.title}
                                />
                            )
                        })
                    }
                </div>
                <div className='combo-section'>
                    <h3>Empanadas</h3>
                    {
                        EmpanadasClassic.map((option) => {
                            return (
                                <EventOption
                                    option={option}
                                    handleChange={handleChangeMenu}
                                    key={option.title}
                                />
                            )
                        })
                    }
                </div>
                <div className='combo-section'>
                    <h3>Entradas</h3>
                    {
                        Entradas.map((option) => {
                            return (
                                <EventOption
                                    option={option}
                                    handleChange={handleChangeEntrada}
                                    key={option.title}
                                />
                            )
                        })
                    }
                </div>
                <div className='combo-section'>
                    <h3>Postres</h3>
                    {
                        Postres.map((option) => {
                            return (
                                <EventOption
                                    option={option}
                                    handleChange={handleChangePostre}
                                    key={option.title}
                                />
                            )
                        })
                    }
                </div>
                <div className='combo-section'>
                    <h3>Bebidas</h3>
                    {
                        Bebidas.map((option) => {
                            return (
                                <EventOption
                                    option={option}
                                    handleChange={handleChangeBebida}
                                    key={option.title}
                                />
                            )
                        })
                    }
                </div>
            </fieldset>
            {
                infoToSend.entrada[0] || infoToSend.menu[0] || infoToSend.postre[0] || infoToSend.bebida[0]
                    ? <ConfirmEvent />
                    : ''
            }
            
            <br></br>Se cobra un costo de envío desde San Isidro. Los menores de 10 años pagan la mitad. 
            <br></br>(*)Se debe abonar la logística del traslado.
            <br></br>Resolvé todas tus dudas por Whatsapp
        </form>
    )
}

export default EventsForm
