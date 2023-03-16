import React, { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'

import './FoodOpt.css'
import pizzasOpt from '../../public/images/pizzas.webp'
import eventsOpt from '../../public/images/eventos.webp'
import Skeleton from 'react-loading-skeleton'
const ImageLazy = lazy(() => import('../ImageLazy/ImageLazy'))


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
            <div className="options-item left">
                <Suspense fallback={
                    <Skeleton style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
                }>
                    <Link
                        onClick={handleClickScrollMenu}>
                        <ImageLazy
                            src={pizzasOpt}
                            alt='pizzas-opt'
                            className='options-img'
                        />
                        <p className="options-circle">Pizzas Congeladas</p>
                    </Link>
                </Suspense>
            </div>
            <div className="options-item right">
                <Suspense fallback={
                    <Skeleton style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
                }>
                    <Link
                        to={'/eventos'}
                        onClick={scrollToTop}>
                        <ImageLazy
                            src={eventsOpt}
                            alt='eventos-opt'
                            className='options-img'
                        />
                        <p className="options-circle">Eventos</p>
                    </Link>
                </Suspense>
            </div>
        </section>
        // <div id='animation'>
        // <span className='parallax-text' text='PIZZADO'>
        //     PIZZADO
        // </span>
        // {/* AGREGAR IMG */}
        // </div>
        
    )
}

export default FoodOpt