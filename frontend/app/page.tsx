import React from 'react'
import Navbar from './components/Navbar'
import Intro from './components/Intro'
import Services from './components/Services'
import About from './components/About'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function page() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Services />
      <About />
      <Gallery />
      <Reviews />
      <FAQ />
      <Footer />
    </div>
  )
}
