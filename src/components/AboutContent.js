import { Link } from "react-router-dom"
import "./AboutContentStyles.css"
import React1 from "../assets/tech unsplah.jpeg"
import React2 from "../assets/tech.jpeg"

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
    <div className="left">
        <h1> Who Am I ? </h1>
        <p> I am Full-Stack Developer. I create Responsive Secure websites for my clients.</p>

        <Link to="/contact"> <button className="btn"> Contact </button></Link>
    </div>
    
    <div className="right">
    <div className="img-container">
        <div className="img-stack top">
            <img src={React1} className="img" alt="true"/>
        
        </div>

        <div className="img-stack bottom">
            <img src={React2} className="img" alt="true"/>
        
        </div>
    
    </div>
    </div>
    </div>
  )
}

export default AboutContent