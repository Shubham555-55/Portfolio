import React from 'react'
import "./Hero.css"

const Hero = () => {
  return (
  <section className='hero' id='home' >
    <div className='container hero-inner' >
    <div className='hero-txt'>
    <p className='hero-greeting'>Hii I'm</p>
    <h1 className='hero-name' >Shubham mishra</h1>
    <h2 className='hero-title' >MERN stack Developer </h2>
    <p className='hero-tagline' >
        I am a developer and working in mern stack projects Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, quas.
    </p>
    <div className='hero-buttons' >
    <a href="#projects" className='btn btn-primary' >See my projects </a>
    <a href="#contact" className='btn btn-outline' >Contact me  </a>
    </div>
    
    </div>
    <div className='hero-photo'>
    <img src="/Shubham.jpeg" alt="Shubham " />
    </div>
    </div>
  </section>
    
  )
}

export default Hero