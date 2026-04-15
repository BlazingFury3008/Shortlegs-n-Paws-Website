import React from 'react'
import Navbar from './components/main/Navbar'
import Intro from './components/main/Intro'
import About from './components/main/About'
import FAQ from './components/main/FAQ'
import Footer from './components/main/Footer'
import Gallery from './components/main/Gallery'
import Reviews from './components/main/Reviews'
import Services from './components/main/Services'


export default function page() {
  return (
    <div className='select-none'>
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
