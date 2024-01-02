import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className='hero-container'>
        <div className="hero-slogan">
            <span>Bu sezonda ən gözəlini siz geyin!🤩</span>
            <h2>Hər kəsə özəl kolleksiya</h2>
            <a href="/">Elə indi kəşf et!</a>
        </div>
        <div className="hero-image-container">
            <img src="/images/hero.png" alt="" className='hero-image' />
        </div>
    </section>
  )
}

export default Hero