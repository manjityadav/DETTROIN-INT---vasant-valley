import React from 'react'
import Hero from '../components/Hero.jsx'
import Stats from '../components/Stats.jsx'
import HeroCard from "../components/HeroCard.jsx"
import Vision from '../components/Vision.jsx'
import About from '../components/About.jsx'
import EducationSection from '../components/Education.jsx'
import Infrastructure from '../components/Infrastructure.jsx'

function HomePage() {
  return (
    <div>
      <Hero/>
      <Stats/>
      <HeroCard/>
      <Vision/>
      <About/>
      <EducationSection/>
      <Infrastructure/>
    </div>
  )
}

export default HomePage
