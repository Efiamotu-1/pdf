import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <>
    <div className='p-5 md:px-[3rem] lg:px-[15rem]'>
   <Header />
   <Hero />
   <About />
    </div>
   <Footer />
    </>
   
  )
}

export default HomePage