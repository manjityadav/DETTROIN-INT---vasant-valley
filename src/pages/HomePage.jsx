import React from 'react'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import HeroCard from "../components/HeroCard"
import Vision from '../components/Vision'
import Excellence from '../components/Excellence'

function HomePage() {
  return (
    <div>
      <Hero/>
      <Stats/>
      <HeroCard/>
      <Vision/>
      <Excellence/>
    </div>
  )
}

export default HomePage
