import React, { Suspense } from 'react'
import useNearScreen from '../../Hooks/useNearScreen'

import './Footer.css'

const Footer = React.lazy(
    () => import('./Footer')
)

export default function FooterLazy (){
    const {isNearScreen, fromRef} = useNearScreen()

    return <section className="container-options" ref={fromRef}>
               <Suspense fallback={null}>
                  {
                      isNearScreen 
                      ? <Footer /> 
                      : null
                  }
               </Suspense>
           </section>
}