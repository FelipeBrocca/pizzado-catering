import React from 'react'
import EventsForm from '../Components/EventsForm/EventsForm'
import { EventProvider } from '../Context/EventContext'

const Events = () => {
  return (
    <main>
      <EventProvider>
        <EventsForm />
      </EventProvider>
    </main>
  )

}

export default Events