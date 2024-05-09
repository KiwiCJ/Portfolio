import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import AboutMe from './components/AboutMe/AboutMe'
import Navigation from './components/Navbar/Navigation'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/AllProjects'
import Skills from './components/Skills/Skills'


function App() {

  return (
  <>
    <Router>
      <div className='app'>
        <Navigation />
        <Routes>
          <Route path='/' element={<AboutMe />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/skills' element={<Skills />} />
        </Routes>
      </div>
    </Router>
  </>
  )
}

export default App;
