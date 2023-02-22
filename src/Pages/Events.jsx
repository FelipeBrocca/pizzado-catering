import React from 'react'
import EventInfo from '../Components/EventsForm/EventInfo'
import EventsForm from '../Components/EventsForm/EventsForm'
import { EventProvider } from '../Context/EventContext'

const Events = () => {
  return (
    <main>
      <section className="section-register">
        <EventInfo />
        <EventProvider>
          <EventsForm />
        </EventProvider>
      </section>
    </main>
  )

}

export default Events