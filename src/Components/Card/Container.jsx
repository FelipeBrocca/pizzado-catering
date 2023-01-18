import React, { Suspense } from 'react'
import useNearScreen from '../../Hooks/useNearScreen'

import Card from './Card'
import './Card.css'

import { ProducData } from './ProductData'

const Container = () => {

    return (
        <>
            <div className='container' id='menu-section'>
                <h2 className="titulo-pizzas"> Pizzas Congeladas </h2>
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

    return <section className="container-options" ref={fromRef}>
               <Suspense fallback={<div>Cargando...</div>}>
                  {
                      isNearScreen 
                      ? <Container /> 
                      : <div>Cargando...</div>
                  }
               </Suspense>
           </section>
}