import React from 'react'
import Slider from '../Components/Slider/Slider'
import FoodOpt from '../Components/FoodOpt/FoodOpt'
import Offers from '../Components/Offers/Offers'
import EventsAsk from '../Components/EventsAsk/EventsAsk'
import Container from '../Components/Card/Container'

const Home = () => {
  return (
    <>
      <Slider />
      <FoodOpt />
      <Offers />
      <EventsAsk />
      <Container />
    </>
  )

}

export default Home