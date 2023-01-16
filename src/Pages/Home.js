import React from 'react'
import Container from '../Components/Card/Container'
import EventsAsk from '../Components/EventsAsk/EventsAsk'
import FoodOpt from '../Components/FoodOpt/FoodOpt'
import FooterLazy from '../Components/Footer/LazyFooter'
import Header from '../Components/Header/Header'
import Offers from '../Components/Offers/Offers'
import Slider from '../Components/Slider/Slider'


const Home = () => {
  return (
    <>
      <Header />
          <Slider />
          <FoodOpt />
          <Offers />
          <EventsAsk />
          <Container />
      <FooterLazy />
    </>
  )

}

export default Home