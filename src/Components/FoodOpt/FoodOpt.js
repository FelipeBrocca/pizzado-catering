import React from 'react'
import { Link } from 'react-router-dom'

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
        <section className='container-options'>
            <div className="options-item">
                <Link
                    onClick={handleClickScrollMenu}>
                    <img src='https://res.cloudinary.com/du2iouufy/image/upload/v1673907263/Pizzado/img-principales/Napolitana_rxlcdx.jpg' alt="" className="options-img" />
                    <p className="options-circle">Pizzas Congeladas</p>
                </Link>
            </div>
            <div className="options-item">
                <Link
                    to={'/eventos'}
                    onClick={scrollToTop}>
                    <img src='https://res.cloudinary.com/du2iouufy/image/upload/v1673907272/Pizzado/img-principales/entradas_yuso01.jpg' alt="" className="options-img" />
                    <p className="options-circle">Eventos</p>
                </Link>
            </div>
        </section>
    )
}

export default FoodOpt