import React from 'react'
import Header from '../layout/Header'
import HeroSection from '../layout/HeroSection'
import ServicesSection from '../layout/ServicesSection'
import AboutUs from '../layout/AboutUs'
import Gallery from '../layout/Gallery'
import Contact from '../layout/Contact'
import Footer from '../layout/Footer'

export default function LandingCleaning() {
  return (
    <>
        <Header/>
        <HeroSection/>
        <AboutUs/>
        <ServicesSection/>
        <Gallery/>
        <Contact/>
        <Footer/>
    </>
    
  )
}
