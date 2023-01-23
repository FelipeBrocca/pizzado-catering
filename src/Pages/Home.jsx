import React from 'react'
import FoodOpt from '../Components/FoodOpt/FoodOpt'
import Offers from '../Components/Offers/Offers'
import EventsAsk from '../Components/EventsAsk/EventsAsk'
import Slider from '../Components/Slider/Slider'
import ContainerLazy from '../Components/Card/Container'


const Home = () => {
  return (
    <>
      <Slider />
      <FoodOpt />
      <Offers />
      <EventsAsk />
      <ContainerLazy />
    </>
  )

}

export default Home