import React from 'react'
import { Link } from 'react-router-dom'
import './EventsForm.css'
import Menu from '../Dropdown/Dropdown'

const EventsForm = () => {
    return (
        <section className="section-register">
            <h2 className="titulo-register">Cotizá tu evento!</h2>
            <form action="resultado.html" method="POST" className="form-register">
                <div className="form-register-input">
                    <label htmlFor="name" className="titulo-input"> Nombre Completo </label>
                    <div>
                        <input type="text" name="name" id="name" required/>
                    </div>
                </div>
                <div className="form-register-input">
                    <label htmlFor="email" className="titulo-input"> E-mail </label>
                    <div>
                        <input type="email" name="email" id="email" required/>
                    </div>
                </div>
                <div className="form-register-input">
                    <label htmlFor="start" className="titulo-input"> Dia del evento: </label>
                    <div>
                        <input type="date" id="start" name="trip-start" min="2023-01-01" max="2030-12-31"/>
                    </div>
                </div>

                {/* AGREGAR DIRECCION DEL EVENTO CON UN MAPA */}
                <p>
                    <button className="button-card">
                        <Link to="#" data-id="1">
                            <span className="button-card-txt"> Enviar </span>
                            <span>¡Dale!</span>
                        </Link>
                    </button>
                </p>
            </form>
            <Menu/>
        </section>
    )
}

export default EventsForm