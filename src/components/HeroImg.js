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
      <p align="center"> HI, <img src="https://user-images.githubusercontent.com/18350557/176309783-0785949b-9127-417c-8b55-ab5a4333674e.gif" alt="wave" height="30" width="30"/> I am  BRIAN NDERITU A Digital CraftsMan. </p>
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