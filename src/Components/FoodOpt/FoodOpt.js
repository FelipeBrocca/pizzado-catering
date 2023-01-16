import React from 'react'
import { Link } from 'react-router-dom'

import './FoodOpt.css'
import { FoodOptData } from './FoodOptData'

const FoodOpt = () => {
const scrollToTop = () => window.scrollTo({ top:0 , behavior:'smooth'})
    return (
    <>
        {
            FoodOptData.map(product => {
                return (
                <div className="options-item" key={product.link}>
                    <Link to={product.link} onClick={scrollToTop}>
                        <img src={product.image} alt="" className="options-img" />
                        <p className="options-circle">{product.title}</p>
                    </Link>
                </div>
                )
            })
        }
    </>
    )
}

export default FoodOpt