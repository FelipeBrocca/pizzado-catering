import React, { Suspense, lazy } from 'react'
import useNearScreen from '../../Hooks/useNearScreen'

import './Footer.css'

const Footer = lazy(
    () => import('./Footer')
)

export default function FooterLazy (){
    const {isNearScreen, fromRef} = useNearScreen()

    return <section className="container-footer" ref={fromRef}>
               <Suspense fallback={null}>
                  {
                      isNearScreen 
                      ? <Footer /> 
                      : null
                  }
               </Suspense>
           </section>
}