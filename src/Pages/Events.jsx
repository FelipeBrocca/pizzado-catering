import React from 'react'
import Offers from '../Components/Offers/Offers'
import EventsForm from '../Components/EventsForm/EventsForm'
import EventsType from '../Components/EventsType/EventsType'

const Events = () => {
  return (
    <>
      <EventsForm />
      <EventsType />
      <Offers />
    </>
  )

}

export default Events