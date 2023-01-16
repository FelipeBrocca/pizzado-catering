import React from 'react'
import { Link } from 'react-router-dom'

import napolitanaOpt from '../../public/images/Napolitana.jpg'
import entradasOpt from '../../public/images/entradas.jpg'
import './FoodOpt.css'

const FoodOpt = () => {

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
    const handleClickScrollMenu = () => {
        const menu = document.getElementById('menu-section')
        if(menu){
            menu.scrollIntoView({behavior: 'smooth'})
        }
    }

    return (
        <>
            <div className="options-item">
                <Link
                    onClick={handleClickScrollMenu}>
                    <img src={napolitanaOpt} alt="" className="options-img" />
                    <p className="options-circle">Pizzas Congeladas</p>
                </Link>
            </div>
            <div className="options-item">
                <Link
                    to={'/eventos'}
                    onClick={scrollToTop}>
                    <img src={entradasOpt} alt="" className="options-img" />
                    <p className="options-circle">Eventos</p>
                </Link>
            </div>
        </>
    )
}

export default FoodOpt