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
                            image = {product.image}
                            title = {product.title}
                            ingredients = {product.ingredients}
                            price = {product.price}
                        />
                    )
                })
            }
        </div>
        </>
    
    )
}

export default Container