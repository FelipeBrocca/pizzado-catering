import React from 'react'
import './Card.css'
import Card from './Card'
import { ProducData } from './ProductData'
const Container = () => {

    return (
        <>
<<<<<<< HEAD
        <div className='container'>
            <h2 className="titulo-pizzas"> Pizzas Congeladas </h2>
=======
        <div className='container' id='menu-section'>
>>>>>>> ec19e089e699825e9fbe30ce11927f09a1e21050
            {
                ProducData.map((product)=>{
                    return (
                        <Card 
                            id={product.id}
                            image = {product.image}
                            name = {product.name}
                            ingredients = {product.ingredients}
                            price = {product.price}
                            key = {product.name}
                        />
                    )
                })
            }
        </div>
        </>
    
    )
}

export default Container