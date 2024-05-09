import React from 'react'
import './SingleProject.css'
import deployment from '../../Images/deployment.png'
import { Modal } from 'react-bootstrap'
import ccc from '../../Images/crashCourseCollective.png'

export default function ModalCCC({ show, onClose}) {
  return (
    <>
      <Modal
        show={show}
        onHide={onClose}
        size='lg'        
        >
        <Modal.Header closeButton>
          <Modal.Title >
            <h2 className='modal-title'>Crash Course Collective</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body'>
          Crash Course Collective is a community based application where the users can view profiles and projects from their fellow students, both past and present. This implements githubs auth to log in/ create an account. Users profiles are public facing where anyone can see, but only that particular user can edit/upload projects to their page. The main page is a collection of all the projects on the database. <br/><br/>
          <img className='display-img' src={ccc} alt="Front Page" /> <br/><br/>
          <h5 className='tech-title'>Technologies Used</h5>
          <div className='icons'>
            <div>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt='React'/>
              <p>React</p>
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
          <a href="https://crashcoursecollective.netlify.app/"><img src={deployment} alt="Deployment Link" /><br/>Deployment</a>
          <a href="https://github.com/KiwiCJ/Unit3_Project_CrashCourseCollective_Frontend"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt='Github' /><br/>Front End</a>
          <a href="https://github.com/KiwiCJ/Unit3_Project_CrashCourseCollective_Backend"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt='Github' /><br/> Back End</a>
        </Modal.Footer>
      </Modal>
    </>
  )
}
