import React, { Suspense } from 'react'
import useNearScreen from '../../Hooks/useNearScreen'

import './EventsAsk.css'

const EventsAsk = React.lazy(
    () => import('./EventsAsk')
)

export default function LazyEventsAsk (){
    const {isNearScreen, fromRef} = useNearScreen()

    return <section className="container-options" ref={fromRef}>
               <Suspense fallback={null}>
                  {
                      isNearScreen 
                      ? <EventsAsk /> 
                      : null
                  }
               </Suspense>
           </section>
}