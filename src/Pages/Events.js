import React from 'react'
import FooterLazy from '../Components/Footer/LazyFooter'
import Header from '../Components/Header/Header'
import Offers from '../Components/Offers/Offers'
import EventsForm from '../Components/EventsForm/EventsForm'
import EventsType from '../Components/EventsType/EventsType'

const Events = () => {
  return (
    <>
      <Header />
          <EventsForm />
          <EventsType />
          <Offers />
      <FooterLazy />
    </>
  )

}

export default Events