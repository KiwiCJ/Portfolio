import React, { useState } from 'react'
import './AllProjects.css'
import Card from 'react-bootstrap/Card'
import getThere from '../../Images/getThere.png'
import threePutt from '../../Images/threePuttClub.png'
import spaceInvaders from '../../Images/spaceInvaders.png'
import crashCourse from '../../Images/crashCourseCollective.png'
import ModalGetThere from './ModalGetThere'
import ModalCrashCourse from './ModalCCC'
import ModalThreePuttClub from './ModalThreePuttClub'
import ModalSpaceInvaders from './ModalSpaceInvaders'

export default function Projects() {

// Project Modals
const [showGetThereModal, setShowGetThereModal] = useState(false);
const [showCrashCourseModal, setShowCrashCourseModal] = useState(false);
const [showThreePuttModal, setShowThreePuttModal] = useState(false);
const [showSpaceInvadersModal, setShowSpaceInvadersModal] = useState(false);

return (
  <div className='projects'>
    <h2 className='projects-title'>Projects</h2>
    <div className='projects-grid'>
      <Card className='project-card' onClick={() => setShowGetThereModal(true)}>
        <Card.Img variant="top" src={getThere} alt='Get There' />
        <Card.Body>
          <Card.Title className="project-title">Get There</Card.Title>
          <Card.Text className="project-description">
            Travel saving web application
          </Card.Text>
        </Card.Body>
      </Card>
      {showGetThereModal && <ModalGetThere show={showGetThereModal} onClose={() => setShowGetThereModal(false)} />}

      <Card className='project-card' onClick={() => setShowCrashCourseModal(true)}>
        <Card.Img variant="top" src={crashCourse} alt='Crash Course' />
        <Card.Body>
          <Card.Title className="project-title">Crash Course Collective</Card.Title>
          <Card.Text className="project-description">
            Project and profile display for students
          </Card.Text>
        </Card.Body>
      </Card>
      {/* Render Crash Course Modal */}
      {showCrashCourseModal && <ModalCrashCourse show={showCrashCourseModal} onClose={() => setShowCrashCourseModal(false)} />}

      <Card className='project-card' onClick={() => setShowThreePuttModal(true)}>
        <Card.Img variant="top" src={threePutt} alt="Three Putt" />
        <Card.Body>
          <Card.Title className="project-title">Three Putt Club</Card.Title>
          <Card.Text className="project-description">
            Store cards, and notes on different golf courses played
          </Card.Text>
        </Card.Body>
      </Card>
      {showThreePuttModal && <ModalThreePuttClub show={showThreePuttModal} onClose={() => setShowThreePuttModal(false)} />}

      <Card className='project-card' onClick={() => setShowSpaceInvadersModal(true)}>
        <Card.Img variant="top" src={spaceInvaders} alt="Space Invaders" />
        <Card.Body>
          <Card.Title className="project-title">Space Invaders</Card.Title>
          <Card.Text className="project-description">
            Browser game
          </Card.Text>
        </Card.Body>
      </Card>
      {showSpaceInvadersModal && <ModalSpaceInvaders show={showSpaceInvadersModal} onClose={() => setShowSpaceInvadersModal(false)} />}

    </div>
  </div>
);
}