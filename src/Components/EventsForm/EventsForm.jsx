import React, { useContext } from 'react'
import ConfirmEvent from './ConfirmEvent';
import EventOption from './EventOption';
import { EventContext } from '../../Context/EventContext'
import { Bebidas, Entradas, PizzaClassic, PizzaPremium, AsadoClassic, AsadoPremium, Hamburguesas, EmpanadasClassic, Postres } from './EventsCateringData';
import catering1 from '../../public/images/catering1.webp'
import catering2 from '../../public/images/catering2.webp'
import catering3 from '../../public/images/catering3.webp'
import './EventsForm.css'

const EventsForm = () => {

    const {handleChangeBebida, handleChangeEntrada, handleChangeMenu, handleChangePostre, bebida, postre, menu, entrada } = useContext(EventContext)

    return (
        <section className="section-register">
            <h2 className="titulo-register">Cotizá tu evento!</h2>
            <div className='top-form'>
                <p>El servicio incluye a los cocineros y mozos. <br></br>Trabajamos en la parrilla u horno que haya en el lugar, aunque también tenemos nuestras parrillas movibles en caso de ser necesarias.<br></br> Se cobra un costo de envío desde San Isidro. Los menores de 10 años pagan la mitad. Se debe abonar la logística del traslado.</p>
                <div className='form-imges-container'>
                    <div className='form-img-div'><img src={catering1} alt='catering1' /></div>
                    <div className='form-img-div'><img src={catering2} alt='catering2'/></div>
                    <div className='form-img-div'><img src={catering3} alt='catering3'/></div> 
                </div>
            </div>
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
        </section>
    )
}

export default EventsForm
