import React, { Suspense } from 'react'
import useNearScreen from '../../Hooks/useNearScreen'

import Card from './Card'
import './Card.css'

import { ProducData } from './ProductData'

const Container = () => {

    return (
        <>
            <div className='container'>
                {
                    ProducData.map((product) => {
                        return (
                            <Card
                            image={product.image}
                            />
                            )
                        })
                    }
            </div>
        </>

    )
}


export default function ContainerLazy (){
    const {isNearScreen, fromRef} = useNearScreen()

    return <section className="container-menu" id='menu-section' ref={fromRef}>
        <h2 className="titulo-pizzas"> NUESTROS EVENTOS </h2>
            <Suspense fallback={<div>Cargando...</div>}>
                {
                    isNearScreen 
                    ? <Container /> 
                    : <div>Cargando...</div>
                }
            </Suspense>
        </section>
}