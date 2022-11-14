import React from 'react'
import EventsAsk from '../Components/EventsAsk/EventsAsk'
import FoodOpt from '../Components/FoodOpt/FoodOpt'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import Slider from '../Components/Slider/Slider'
const Home = () => {


  return (
    <>
      <Header />
         <Slider />
         <FoodOpt />
         <EventsAsk />
      <Footer />
    </>
  )

}

export default Home