import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React1 from "../assets/tech unsplah.jpeg";
import React2 from "../assets/tech.jpeg";

import React from 'react';

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>I am a passionate and experienced Full-Stack Developer, dedicated to crafting exceptional and secure websites for my clients. With a strong expertise in web development, I strive to create responsive and user-friendly solutions that exceed expectations.</p>
        <p>With a keen eye for detail and a focus on delivering seamless user experiences, I am committed to staying up-to-date with the latest technologies and best practices in the industry. I am always excited to take on new challenges and collaborate with clients to bring their visions to life.</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
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
  );
}

export default AboutContent;
