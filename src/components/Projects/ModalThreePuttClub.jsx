import React from 'react'
import './SingleProject.css'
import deployment from '../../Images/deployment.png'
import { Modal } from 'react-bootstrap'
import threePutt from '../../Images/threePuttClub.png'

export default function ModalGetThere({show, onClose}) {
  return (
  <>
    <Modal
      show={show}
      onHide={onClose}
      size='lg'
      className='project-two'>
        <Modal.Header closeButton>
          <Modal.Title className='modal-title'>Three Putt Club</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body'>
          This is my first full-stack application using Vue.js. Since I lacked a space to save my golfing records along with noteworthy mentions or insights about the golf courses I've experienced, I built a web application. Its purpose is to serve as a repository for my golf scores and details of various golf courses I've played.
          <img className='display-img' src={threePutt} alt="Front page" />
          <h5 className='tech-title'>Technologies Used</h5>
          <div className='icons'>
            <div>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" alt='vue.js'/>
              <p>Vue.js</p>
            </div>
            <div>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt='HTML'/>
              <p>HTML</p>
            </div>
            <div>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt='CSS'/>
              <p>CSS</p>
            </div>
            <div>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"  alt='JavaScript'/>
              <p>JavaScript</p>
            </div>
            <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" alt='NodeJS' />
            <p>Node</p>
            </div>
            <div>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" alt='Express'/>
              <p>Express</p>
            </div>
            <div>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" alt='MongoDB'/>
              <p>MongoDB</p>
            </div>
            <div>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"alt='Bootstrap'/>
              <p>Bootstrap</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className='modal-footer'>
          <a href="https://threeputtclub.netlify.app/"><img src={deployment} alt="Deployment Link" /><br />Deployment</a> 
          <a href="https://github.com/KiwiCJ/Project-2-Frontend"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt='Github' /><br /> Front End</a>
          <a href="https://github.com/KiwiCJ/Project-2-Backend"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt='Github' /><br />Back End</a>
        </Modal.Footer>
    </Modal>
  </>
  )
}
