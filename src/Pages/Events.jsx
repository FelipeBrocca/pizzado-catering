import React from 'react'
import EventInfo from '../Components/EventsForm/EventInfo'
import EventsForm from '../Components/EventsForm/EventsForm'
import { EventProvider } from '../Context/EventContext'
import Testimonials from '../Components/Testimonials/Testimonials'

const Events = () => {
  return (
    <main>
      <section className="section-register">
        <EventInfo />
        <EventProvider>
          <EventsForm />
        </EventProvider>
        {/* <Testimonials /> */}
      </section>
    </main>
  )

}

export default Events