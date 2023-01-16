import React from 'react'
import { Link } from 'react-router-dom'
import './EventsAsk.css'

const EventsAsk = () => {

const scrollToTop = () => window.scrollTo({ top:0 , behavior:'smooth'})

    return (
        <section className="section-events" id="events">
            <div className="section-container">
                <h2 className="section-title">
                    Cotizá tu Evento
                </h2>
                <p className="section-events-txt">
                    Querés conocer mas acerca de nuestros eventos? <br /> Completá tus datos y enterate
                </p>
                <Link to='/eventos' onClick={scrollToTop}>
                    <button className="button-events">
                        <div className="svg-wrapper-1">
                            <div className="svg-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34" fill="currentColor" className="whatsapp-ico" width="24px" height="24px">
                                    <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                                    <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                                </svg>
                            </div>
                        </div>
                        <span>¡Consultanos!</span>
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default EventsAsk