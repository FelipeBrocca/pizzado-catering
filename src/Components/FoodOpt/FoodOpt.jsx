import React from 'react'
import { Link } from 'react-router-dom'

import './FoodOpt.css'
import pizzasOpt from '../../public/images/pizzas.webp'
import eventsOpt from '../../public/images/eventos.webp'

const FoodOpt = () => {

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
    const handleClickScrollMenu = () => {
        const menu = document.getElementById('menu-section')
        if(menu){
            menu.scrollIntoView({behavior: 'smooth'})
        }
    }

    return (
        <section className='container-options'>
            <div className="options-item">
                <Link
                    onClick={handleClickScrollMenu}>
                    <img src={pizzasOpt} alt="pizzas-opt" className="options-img" />
                    <p className="options-circle">Pizzas Congeladas</p>
                </Link>
            </div>
            <div className="options-item">
                <Link
                    to={'/eventos'}
                    onClick={scrollToTop}>
                    <img src={eventsOpt} alt="eventos-opt" className="options-img" />
                    <p className="options-circle">Eventos</p>
                </Link>
            </div>
        </section>
    )
}

export default FoodOpt