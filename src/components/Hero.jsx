import React from 'react'
import '../css/style.css'
import heroImg from '../images/desktop/image-interactive.jpg'
function Hero() {
  return (
    <div className='hero'>

        <div className='img-box'>
            <img src={heroImg} alt='hero' className='desktop-hero' />
        </div>

        <div className='content-box'>
            <h2>The leader in interactive vr</h2>
            <p>
                Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
            </p>
        </div>
    </div>
  )
}

export default Hero