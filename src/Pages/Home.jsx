import React from 'react'
import FoodOpt from '../Components/FoodOpt/FoodOpt'
// import Offers from '../Components/Offers/Offers'
import EventsAsk from '../Components/EventsAsk/EventsAsk'
import Slider from '../Components/Slider/Slider'
import ContainerLazy from '../Components/Card/Container'
import Testimonials from '../Components/Testimonials/Testimonials'

const Home = () => {
  return (
    <main>
      <Slider />
      <FoodOpt />
      {/* <Offers />  */}
      <ContainerLazy />
      <EventsAsk />
      <Testimonials />
    </main>
  )

}

export default Home