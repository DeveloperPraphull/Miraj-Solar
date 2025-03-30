import React from 'react'
import HeroSection from '../../components/HeroSection'
import Segment from '../../components/Segment'
import WhyChooseUs from '../../components/WhyChoseUs'
import SolarSteps from '../../components/SolarStep'
import Awards from '../../components/Awards'
import Testimonials from '../../components/Testimonials'
import Impact from '../../components/Impect'
import FAQ from '../../components/FAQ'
import ContectUs from '../../components/ContectUs'

export default function HomePage() {
  return (
    <div>
        <HeroSection/>
        <Segment/>
        <WhyChooseUs/>
        <SolarSteps/>
        <Awards/>
        <Testimonials/>
        <Impact/>
        <FAQ/>

    </div>
  )
}
