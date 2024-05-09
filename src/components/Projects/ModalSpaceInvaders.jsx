import React from 'react'
import './SingleProject.css'
import Modal from 'react-bootstrap/Modal'
import deployment from '../../Images/deployment.png'
import spaceInvaders from '../../Images/spaceInvaders.png'

export default function ModalSpaceInvaders({show, onClose}) {
  return (
    <Modal
      show={show}
      onHide={onClose}
      size='lg'
      className='project-one'
    >
      <Modal.Header closeButton>
        <Modal.Title className='modal-title'>Space Invaders</Modal.Title>
      </Modal.Header>
      <Modal.Body className='modal-body'>
        A pokemon themed space invaders game browser game. This was completed in the 3rd week of my coding journey with General Assembly software engineering immersive course. This project's goal was to create a grid that could interact with moving objects, both human and computed through the use of JavaScript.<br/> 
        <img  className='display-img' src={spaceInvaders} alt='Space Invaders'/>
        <h5 className='tech-title'>Technologies Used</h5>
          <div className='icons'>
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
          </div>
      </Modal.Body>
      <Modal.Footer>
        <a href="https://kiwicj.github.io/Unit1_Project_SpaceInvadors/"><img src={deployment} alt="Deployment Link" /><br/>Deployment</a>
        <a href="https://github.com/KiwiCJ/Unit1_Project_SpaceInvadors"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt='Github' /><br/>GitHub</a>
      </Modal.Footer>
    </Modal>
  )
}
