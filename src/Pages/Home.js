import React from 'react'
import Container from '../Components/Card/Container'
import LazyEventsAsk from '../Components/EventsAsk/LazyEventsAsk'
import FoodOptLazy from '../Components/FoodOpt/LazyFoodOpt'
import FooterLazy from '../Components/Footer/LazyFooter'
import Header from '../Components/Header/Header'
import Offers from '../Components/Offers/Offers'
import Slider from '../Components/Slider/Slider'
import EventsForm from '../Components/EventsForm/EventsForm'
import EventsType from '../Components/EventsType/EventsType'

const Home = () => {
  return (
    <>
      <Header />
          <Slider />
          <FoodOptLazy />
          <Offers />
          <LazyEventsAsk />
          <Container />
          <EventsForm />
          <EventsType />
      <FooterLazy />
    </>
  )

}

export default Home