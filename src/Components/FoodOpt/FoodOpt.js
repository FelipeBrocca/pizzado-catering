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
                    <img src='https://res.cloudinary.com/du2iouufy/image/upload/v1673912076/Pizzado/img-principales/Imagen_de_WhatsApp_2023-01-16_a_las_20.33.54_fiazhh.jpg' alt="" className="options-img" />
                    <p className="options-circle">Pizzas Congeladas</p>
                </Link>
            </div>
            <div className="options-item">
                <Link
                    to={'/eventos'}
                    onClick={scrollToTop}>
                    <img src='https://res.cloudinary.com/du2iouufy/image/upload/v1673912056/Pizzado/img-principales/Imagen_de_WhatsApp_2023-01-16_a_las_20.33.50_cf90h4.jpg' alt="" className="options-img" />
                    <p className="options-circle">Eventos</p>
                </Link>
            </div>
        </section>
    )
}

export default FoodOpt