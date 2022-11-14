import React, { Suspense } from 'react'
import useNearScreen from '../../Hooks/useNearScreen'

import './FoodOpt.css'

const FoodOpt = React.lazy(
    () => import('./FoodOpt')
)

export default function FoodOptLazy (){
    const {isNearScreen, fromRef} = useNearScreen()

    return <section className="container-options" ref={fromRef}>
               <Suspense fallback={null}>
                  {
                      isNearScreen 
                      ? <FoodOpt /> 
                      : null
                  }
               </Suspense>
           </section>
}