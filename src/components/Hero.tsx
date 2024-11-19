import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div
      id='hero'
      className='min-h-screen bg-no-repeat bg-[url(/bg-banner2.png)] bg-cover'
      data-aos="fade-right"
      style={{ backgroundSize: '32%', backgroundPosition: 'left 150px top 150px' }}
    >
      <Navbar />
      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
      <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-center items-center'>
          <div data-aos="zoom-in-up">
            <p>I&apos;m</p>
            <p>Zain</p>
            <p>Darbari</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
