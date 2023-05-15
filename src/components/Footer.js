import React from 'react'
import "./FooterStyles.css"
import { FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color: 
                        "#fff", marginRight: "2rem"}} />

                        <div>
                            <p> Nairobi </p>
                            <p> Kenya </p>
                        </div>

                </div>
                <div className='phone'>
                <h4><FaPhone size={20} style={{color: 
                    "#fff", marginRight: "2rem"}} />
                    +254792688392</h4>
                
                </div>

                <div className='email'>
                <h4><FaMailBulk size={20} style={{color: 
                    "#fff", marginRight: "2rem"}} />
                    bnnderitu01@gmail.com</h4>
                
                </div>
            </div>
            <div className='right'>
                    <h4> About The Company </h4>
                    <p> This is me Brian Nderitu. CEO & Founder of Brineviv. 
                    I enjoy discussing new projects and design challenges.</p>
            <div className='social'>
            <FaTwitter size={30} style={{color: 
                "#fff", marginRight: "2rem"}} />

                <FaLinkedin size={30} style={{color: 
                    "#fff", marginRight: "2rem"}} />
            </div>
            </div>

        </div>
    </div>
  )
}

export default Footer