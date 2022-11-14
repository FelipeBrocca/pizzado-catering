import React from 'react'
import LazyEventsAsk from '../Components/EventsAsk/LazyEventsAsk'
import FoodOptLazy from '../Components/FoodOpt/LazyFoodOpt'
import FooterLazy from '../Components/Footer/LazyFooter'
import Header from '../Components/Header/Header'
import Slider from '../Components/Slider/Slider'


const Home = () => {

  return (
    <>
      <Header />
         <Slider />
         <FoodOptLazy />
         <LazyEventsAsk />
      <FooterLazy />
    </>
  )

}

export default Home