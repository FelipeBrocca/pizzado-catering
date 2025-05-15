import React from 'react'
import FoodOpt from '../Components/FoodOpt/FoodOpt'
import Slider from '../Components/Slider/Slider'
import ContainerLazy from '../Components/Card/Container'
import Testimonials from '../Components/Testimonials/Testimonials'

const Home = () => {
  return (
    <main>
      <Slider />
      <ContainerLazy />
      {/* <Testimonials /> */}
    </main>
  )

}

export default Home