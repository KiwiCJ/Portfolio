import React from 'react'
import me from '../../Images/me.png'
import './AboutMe.css'

export default function AboutMe() {
  return (
    <div className='about-me'>
      <div className="header">
          <img className="profile-pic" src={me} alt="Cameron"/>
          <h1>Cameron Orr</h1> 
          <div className='social-icons'>
          <a className='icon' href="https://github.com/KiwiCJ" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt='Github' />
          </a>
          <a className='icon' href="https://www.linkedin.com/in/cameron-orr93/" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt='LinkedIn' />
          </a>
          <a className='icon' href="mailto:cam.orr93@gmail.com">
            <img src="https://cdn-icons-png.flaticon.com/128/732/732200.png" alt="Email" />
          </a>
        </div>
      </div>
      <br/>
      <div className='description'>
        <p>
          Hey there! I'm Cam, originally from Taupo, New Zealand. You'll generally catch me out and about, living my best life. Whether it's hitting the golf course to work on my swing, or out for a good run. I enjoy an outdoor adventure.<br/><br/>
          I'm not just a sports fanatic. I'm also a tech junkie. I live for the latest gadgets, software updates, and tech news. So, it only makes sense that I'm itching to dive headfirst into the software development scene. I'm ready to blend my business savvy with my hunger for tech knowledge, ready to immerse myself in this ever-evolving industry.<br/><br/>
          Click the links and connect with me now!
        </p>
      </div>
    </div>
  )
}
