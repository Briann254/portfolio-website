import React from 'react'
import "./HeroImgStyles.css"
import IntroImg from '../assets/Apple-macOS-13-wallpaper-Dark-Mode.jpg'
import { Link } from 'react-router-dom'

const HeroImg = () => {
  return (
    <div className='hero'>
    <div className='mask'>
        <img className='into-img' src={IntroImg} alt='IntroImg'/>
    </div>
    <div className='content'>
      <p> HI, I am  BRIAN NDERITU A Digital CraftsMan. </p>
      <h1> Full-Stack Developer. </h1>
      <div>
        <Link to="/project" className='btn'> PROJECTS </Link>
        <Link to="/contact" className='btn btn-light'> CONTACT </Link>
      </div>
    </div>
    </div>
  )
}

export default HeroImg