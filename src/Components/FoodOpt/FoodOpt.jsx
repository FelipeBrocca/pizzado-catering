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
                    <img src='https://res.cloudinary.com/dvvqhykic/image/upload/v1674074598/img-principales/pizzas_tap8tg.webp' alt="" className="options-img" />
                    <p className="options-circle">Pizzas Congeladas</p>
                </Link>
            </div>
            <div className="options-item">
                <Link
                    to={'/eventos'}
                    onClick={scrollToTop}>
                    <img src='https://res.cloudinary.com/dvvqhykic/image/upload/v1674074596/img-principales/eventos_bt8mip.webp' alt="" className="options-img" />
                    <p className="options-circle">Eventos</p>
                </Link>
            </div>
        </section>
    )
}

export default FoodOpt