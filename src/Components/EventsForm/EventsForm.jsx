import React, { useContext } from 'react'
import ConfirmEvent from './ConfirmEvent';
import EventOption from './EventOption';
import { EventContext } from '../../Context/EventContext'
import { Bebidas, Entradas, PizzaClassic, PizzaPremium, AsadoClassic, AsadoPremium, Hamburguesas, EmpanadasClassic, Postres } from './EventsCateringData';
import './EventsForm.css'

const EventsForm = () => {

    const { handleChangeBebida, handleChangeEntrada, handleChangeMenu, handleChangePostre, bebida, postre, menu, entrada } = useContext(EventContext)

    return (
        <form className="form-register">
            <fieldset className='form-register-input'>
                <legend>Elegí tus combos.<br></br><small>(Todos los precios son por persona)</small></legend>
                <div className='combo-section'>
                    <h3>Pizzas</h3>
                    <EventOption
                        OptionName={PizzaClassic}
                        handleChange={handleChangeMenu}
                    />
                    <EventOption
                        OptionName={PizzaPremium}
                        handleChange={handleChangeMenu}
                    />
                </div>
                <div className='combo-section'>
                    <h3>Asado</h3>
                    <EventOption
                        OptionName={AsadoClassic}
                        handleChange={handleChangeMenu}
                    />
                    <EventOption
                        OptionName={AsadoPremium}
                        handleChange={handleChangeMenu}
                    />
                </div>
                <div className='combo-section'>
                    <h3>Hamburguesas</h3>
                    <EventOption
                        OptionName={Hamburguesas}
                        handleChange={handleChangeMenu}
                    />
                </div>
                <div className='combo-section'>
                    <h3>Empanadas</h3>
                    <EventOption
                        OptionName={EmpanadasClassic}
                        handleChange={handleChangeMenu}
                    />
                </div>
                <div className='combo-section'>
                    <h3>Entradas</h3>
                    <EventOption
                        OptionName={Entradas}
                        handleChange={handleChangeEntrada}
                    />
                </div>
                <div className='combo-section'>
                    <h3>Postres</h3>
                    <EventOption
                        OptionName={Postres}
                        handleChange={handleChangePostre}
                    />
                </div>
                <div className='combo-section'>
                    <h3>Bebidas</h3>
                    <EventOption
                        OptionName={Bebidas}
                        handleChange={handleChangeBebida}
                    />
                </div>
            </fieldset>
            {
                entrada[0] || menu[0] || postre[0] || bebida[0]
                    ? <ConfirmEvent />
                    : ''
            }

        </form>
    )
}

export default EventsForm
