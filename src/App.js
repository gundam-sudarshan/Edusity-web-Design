import React, { useState } from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/hero/hero'
import Programs from './components/programs/programs'
import Title from './components/title/title'
import About from './components/about/about'
import Campus from './components/campus/campus'
import Testimonials from './components/testimonials/testimonials'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import VideoPlayer from './components/videoPlayer/videoPlayer'

const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle="Our PROGRAMS" title="What We Offer"/>
        <Programs />
        <About setPlayState={setPlayState}/>
        <Title subTitle="Gallery" title="campus photos"/>
        <Campus />
        <Title subTitle="TESTIMONIALS" title="What Student Says"/>
        <Testimonials />
        <Title subTitle="Contact Us" title="Get In Touch"/>
        <Contact />
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default App