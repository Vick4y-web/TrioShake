import { useState, useEffect } from 'react'
import React from 'react'
import Navbar from './Component/Navbar'
import Hero from './Component/Hero'
import Services from './Component/Services'
import Menu from './Component/Menu'
import About from './Component/About'
import Footer from './Component/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  React.useEffect(() => {
    AOS.init({
      offset:100,
      duration:500,
      easing:"ease-in-sine",
      delay: 100,
    })
    AOS.refresh();
  }, [])

  return (
    <>
    <div className='bg-gray-100 min-h-screen'>
    <Navbar/>
    <Hero/>
    <Services/>
    <Menu />
    <About />
    <Footer/>
    </div>
    </>
  )
}

export default App
