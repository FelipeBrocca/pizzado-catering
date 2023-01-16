import React from 'react'
import Container from '../Components/Card/Container'
import LazyEventsAsk from '../Components/EventsAsk/LazyEventsAsk'
import FoodOptLazy from '../Components/FoodOpt/LazyFoodOpt'
import FooterLazy from '../Components/Footer/LazyFooter'
import Header from '../Components/Header/Header'
import Offers from '../Components/Offers/Offers'
import Slider from '../Components/Slider/Slider'


const Home = () => {
  return (
    <>
      <Header />
          <Slider />
          <FoodOptLazy />
          <Offers />
          <LazyEventsAsk />
          <Container />
      <FooterLazy />
    </>
  )

}

export default Home