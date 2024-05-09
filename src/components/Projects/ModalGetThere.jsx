import React from 'react'
import './SingleProject.css'
import Modal from 'react-bootstrap/Modal'
import deployment from '../../Images/deployment.png'
import getThere from '../../Images/getThere.png'

export default function ModalGetThere({ show, onClose }) {
  return (
    <>
      <Modal 
        show={show}
        onHide={onClose}
        size='lg'
        >
        <Modal.Header closeButton>
          <Modal.Title className='modal-title'>
            Get There
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body'>
        This currency exchange application designed to help you save for an overseas trip. It implements an external API, to exchange the currencies displaying the requested country currency so you can see exactly how much money you would have whilst on holiday.
        whilst also having a dynamically chaging progress bar to display how close you are to your saving goal.
        The public facing side of this app is a currency exchange, that can be used regardless of if you have an account.
        <img className='display-img' src={getThere} alt="Front Page" />
        <h5 className='tech-title'>Technologies Used</h5>
          <div className='icons'>
            <div>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt='React'/>
              <p>React</p>
            </div>
            <div>
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt='Python'/>
              <p>Python</p>
            </div>
            <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" alt='Django' />
            <p>Django</p>
          </div>
          <div>
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt='Postgresql' />
            <p>PostgreSQL</p>
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
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"alt='Bootstrap'/>              <p>Bootstrap</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className='modal-footer'>
          <a href="https://get-there.up.railway.app/"><img src={deployment} alt="Deployment Link" /><br/>Deployment</a> 
          <a href="https://github.com/KiwiCJ/Project4-Frontend-Get-There"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt='Github' /><br/> Front End</a>
          <a href="https://github.com/KiwiCJ/Project4-Backend-Get-There"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt='Github' /><br/> Back End</a>
        </Modal.Footer>      
      </Modal>
    </>
  )
}
