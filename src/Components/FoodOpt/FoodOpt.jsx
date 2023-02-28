import React, { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'

import './FoodOpt.css'
import pizzasOpt from '../../public/images/pizzas.webp'
import eventsOpt from '../../public/images/eventos.webp'
import Fallback from '../LazyImage/Fallback'
const LazyImage = lazy(() => import('../LazyImage/LazyImage'))

const FoodOpt = () => {

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
    const handleClickScrollMenu = () => {
        const menu = document.getElementById('menu-section')
        if (menu) {
            menu.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section className='container-options'>
            <div className="options-item">
                <Suspense fallback={<Fallback />} >
                    <Link
                        onClick={handleClickScrollMenu}>
                        <LazyImage
                            src={pizzasOpt}
                            alt='pizzas-opt'
                            className='options-img'
                        >
                        <p className="options-circle">Pizzas Congeladas</p>
                        </LazyImage>
                    </Link>
                </Suspense>
            </div>
            <div className="options-item">
                <Suspense fallback={<Fallback />}>
                    <Link
                        to={'/eventos'}
                        onClick={scrollToTop}>
                        <LazyImage
                            src={eventsOpt}
                            alt='eventos-opt'
                            className='options-img'
                        >
                        <p className="options-circle">Eventos</p>
                        </LazyImage>
                    </Link>
                </Suspense>
            </div>
        </section>
    )
}

export default FoodOpt