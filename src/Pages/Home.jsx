import React from 'react'
import FoodOpt from '../Components/FoodOpt/FoodOpt'
import Offers from '../Components/Offers/Offers'
import EventsAsk from '../Components/EventsAsk/EventsAsk'
import Slider from '../Components/Slider/Slider'
import ContainerLazy from '../Components/Card/Container'


const Home = () => {
  return (
    <main>
      <Slider />
      <FoodOpt />
      <Offers />
      <EventsAsk />
      <ContainerLazy />
    </main>
  )

}

export default Home