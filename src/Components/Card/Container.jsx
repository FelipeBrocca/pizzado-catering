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
                            id={product.id}
                            image={product.image}
                            name={product.name}
                            ingredients={product.ingredients}
                            price={product.price}
                            key={product.name}
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
        <h2 className="titulo-pizzas"> PIZZAS CONGELADAS </h2>
        <h3 className='slider-text offer'>10% OFF EN EFECTIVO Y TAKEAWAY</h3>
            <Suspense fallback={<div>Cargando...</div>}>
                {
                    isNearScreen 
                    ? <Container /> 
                    : <div>Cargando...</div>
                }
            </Suspense>
        </section>
}