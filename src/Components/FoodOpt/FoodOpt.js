import React from 'react'
import { Link } from 'react-router-dom'

import './FoodOpt.css'
import { FoodOptData } from './FoodOptData'

const FoodOpt = () => {
  return (
    <>
        {
            FoodOptData.map(product => {
                return (
               <div className="options-item" key={product.link}>
                   <Link to={product.link}>
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