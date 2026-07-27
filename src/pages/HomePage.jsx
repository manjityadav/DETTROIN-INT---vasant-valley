import React from 'react'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import HeroCard from "../components/HeroCard"
import Vision from '../components/Vision'

function HomePage() {
  return (
    <div>
      <Hero/>
      <Stats/>
      <HeroCard/>
      <Vision/>
    </div>
  )
}

export default HomePage
