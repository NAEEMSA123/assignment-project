import { RiLinkedinBoxFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import React from 'react'


function Footer() {
  return (
    
    <div className='footer'>
        <button className='send'>Send Message</button>
        <h1>Naeem Ahmed</h1>
       

        <div className="icons">
        <RiLinkedinBoxFill />
        <FaGithub />
        <FaDiscord />
        </div>
        <div className="foot">
          <h4>Home</h4>
          <h4>About</h4>
          <h4>Content Us</h4>
          <h4>Skills</h4>
      
        </div>
        <p className="copy">copyright 2024 Designed by ,<span>Naeem</span></p>

    </div>
    
  )
}

export default Footer