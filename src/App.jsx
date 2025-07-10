import React from 'react'
import Navbar from './components/Navbar';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Gallery from './components/Gallery';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <Footer/>
      <Gallery/>

     

    </div>
  )
}

export default App