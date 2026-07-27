import React from 'react'
import Hero from '../components/Hero.jsx'
import Stats from '../components/Stats.jsx'
import HeroCard from "../components/HeroCard.jsx"
import Vision from '../components/Vision.jsx'
import About from '../components/About.jsx'
import EducationSection from '../components/Education.jsx'
import Infrastructure from '../components/Infrastructure.jsx'
import LearningExperience from '../components/Learning.jsx'
import Events from '../components/Events.jsx'
import InstagramSection from '../components/Instagram.jsx'

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
      <LearningExperience/>
      <Events/>
      <InstagramSection/>
    </div>
  )
}

export default HomePage
