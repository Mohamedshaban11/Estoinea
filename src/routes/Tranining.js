import React from 'react'
import Navbar from '../components/Navbar'
import HeroImage from '../components/HeroImage'
import Footer from '../components/Footer'
import TraniningSection from '../components/Tranining'

const Tranining = () => {
  return (
    <div>
        <Navbar/>
        <HeroImage heading='TRANINING' text='Pre-Flight & In-Flight-Tranining'/>
        <TraniningSection/>
        <Footer/>
    </div>
  )
}

export default Tranining