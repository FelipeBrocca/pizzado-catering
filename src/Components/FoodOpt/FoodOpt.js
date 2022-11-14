import React from 'react'
import { Link } from 'react-router-dom'

import './FoodOpt.css'
import { FoodOptData } from './FoodOptData'

const FoodOpt = () => {
  return (
    <section class="container-options">
        {
            FoodOptData.map(product => {
                return (
               <div class="options-item">
                   <Link to={product.link}>
                       <img src={product.image} alt="" class="options-img" />
                       <p class="options-circle">{product.title}</p>
                   </Link>
               </div>
               )
            })
        }
    </section>
  )
}

export default FoodOpt