import React from 'react';
import './Experience.css';

export default function Experience() {
  return (
    <div className='experience'>
      <h2 className='title'>Experience</h2>

      <section className='section'>
        <div>
          <h5 className='job-title'>
            Student, Software Engineering Immersive, General Assembly (Remote)
            <br /> November 2023 - March 2024
          </h5>
        </div>
        <div className='job-info'>
          Full-time 12-week transformative course where I learned a solid base
          of fundamental programming languages and frameworks, going from zero
          coding experience to building full-stack applications.
          <br />
          Day-to-day classes included daily stand-ups, lectures, labs, and
          projects in teams and individually.
        </div>
      </section>

      <section className='section'>
        <div>
          <h5 className='job-title'>
            Clevertronics - Auckland, New Zealand - Business Development Manager
            <br /> Sep 2021 - Jan 2023
          </h5>
        </div>
        <div className='job-info'>
          <ul>
            <li>
              Meeting KPIs for sales targets for Auckland and Waikato regions.
              <br />
            </li>
            <li>
              Managing and meeting project deadlines and delivering high-quality solutions.
              <br />
            </li>
            <li>
              Managing external sales focusing on business growth throughout the
              specification stage of new projects.
              <br />
            </li>
            <li>
              Negotiating and communicating with multiple stakeholders to ensure
              all needs are met which include budgeting, working to strict time
              frames, and providing expertise of offerings.
              <br />
            </li>
            <li>
              Networking with a range of customers such as engineers, contractors
              and wholesalers.
              <br />
            </li>
            <li>
              Providing ongoing technical expertise to customers.
              <br />
            </li>
          </ul>
        </div>
      </section>

      <section className='section'>
        <div>
          <h5 className='job-title'>
            CMS Electracom - Auckland, New Zealand Sales Executive
            <br /> Sept 2019 - Sep 2021
          </h5>
        </div>
        <div className='job-info'>
          <ul>
            <li>
              New business, project driven with a focus on securing work at
              specification stage.
              <br />
            </li>
            <li>
              Networking with Electrical Engineers within companies such as Beca
              and NDY.
              <br />
            </li>
            <li>
              Keeping abreast of all ongoing and upcoming projects across New
              Zealand.
              <br />
            </li>
            <li>
              Liaising with directors and project managers of large electrical
              contractors.
              <br />
            </li>
            <li>
              Providing ongoing technical expertise to customers.
              <br />
            </li>
          </ul>
        </div>
      </section>

      <div>
        <p>For more information and a complete career breakdown, please see my{' '}
          <a  className='linkedin-link' href="https://www.linkedin.com/in/cameron-orr93/" target="_blank" rel="noopener noreferrer">
            LinkedIn
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt='LinkedIn' />
          </a>
        </p>
      </div>
    </div>
  );
}
