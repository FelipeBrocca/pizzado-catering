import React from 'react'
import './Card.css'
import Card from './Card'
import { ProducData } from './ProductData'
const Container = () => {

    return (
        <>
        <div className='container'>
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