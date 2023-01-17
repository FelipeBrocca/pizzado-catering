import React, { lazy, Suspense } from 'react'

const Container = lazy(() => import('../Components/Card/Container'))
const EventsAsk = lazy(() => import('../Components/EventsAsk/EventsAsk'))
const FoodOpt = lazy(() => import('../Components/FoodOpt/FoodOpt'))
const Offers = lazy(() => import('../Components/Offers/Offers'))
const Slider = lazy(() => import('../Components/Slider/Slider'))


const Home = () => {
  return (
    <Suspense fallback= {<div />}>
      <Slider />
      <FoodOpt />
      <Offers />
      <EventsAsk />
      <Container />
    </Suspense>
  )

}

export default Home