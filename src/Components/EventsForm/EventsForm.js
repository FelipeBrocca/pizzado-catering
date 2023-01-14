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
                    <input type="text" name="name" id="name" placeholder="Nombre y Apellido" required/>
                </div>
                <div className="form-register-input">
                    <input type="email" name="email" id="email" placeholder="Email" required/>
                </div>
                <div className="form-register-input">
                    <input type="street-address" placeholder="Direccion" />
                    {/* AGREGAR DIRECCION DEL EVENTO CON UN MAPA */}
                </div>
                <div className="form-register-input">
                    <input type="datetime-local" id="start" name="trip-start" 
                    min="2023-01-01" max="2200-12-31" placeholder="Fecha y Hora"/>
                </div>
                <div className="form-register-input">
                    <input type="text" placeholder="Cantidad de invitados" />
                </div>
                <button className="button-card">
                    <Link to="#" data-id="1">
                        <span className="button-card-txt"> Enviar </span>
                        <span>¡Dale!</span>
                    </Link>
                </button>
            </form>
            <Menu/>
        </section>
    )
}

export default EventsForm