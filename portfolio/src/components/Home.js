// Package imports
import React from 'react';
import Button from '@material-ui/core/Button';
// Components
import TeamLead from './modals/TeamLead';
import POC from './modals/POC';
// Styling
import '../styling/Home.css';
import meBlue from '../images/meBlue.jpg';
import lambdaBadge from '../images/lambdaBadge.png';


export const Home = () => {
    return (
      <div className='card-wrapper'>
        <section className='intro-card'>
          <img src={meBlue} alt='Lyndsi Kay Williams' className='home-pic' />
          <div className='text-wrapper'>
            <section className='intro-text' >
              <p>I am a front end-leaning full-stack software engineer. I have a passion for accessibility, testing, infrastructure, and styling.</p>
              <p>I love to learn, knowledge-share, and mentor - these three passions are self-feeding. The more I learn, the more I can mentor others. Through that knowledge-sharing, I can learn even more through my mentees. It's a beautiful cycle.</p>
              <p>Below is a list of skills in which I've had the pleasure of indulging during my career so far.</p>
            </section>
            <section className='skills'>
              <h3>♦ Skills ♦</h3>
              <h4>Front end</h4>
              <p>React, Redux, React Testing Library, Jest, Cypress, Javascript, Typescript, HTML, CSS, LESS/SASS</p>
              <h4>Back end</h4>
              <p>Python, NodeJS, Express, SQL</p>
              <h4>Other relative skills</h4>
              <p>RESTful API, GraphQL, Deployment, Git, Agile Methodology</p>
            </section>
            <section className='experience'>
              <h3>♦ Experience ♦</h3>
              <p
                style={{
                  textAlign: 'center',
                  color: '#701dd6',
                  fontSize: '1.7em',
                  fontFamily: "'Bubblegum Sans', cursive",
                  fontWeight: '400'
                }}
              >
                Click each job for Details!
              </p>
              <div className='experience-btns' data-testid='experience-btns'>
                <TeamLead />
                <POC />
              </div>
            </section>
            <section className='education' data-testid='education'>
              <h3>♦ Education ♦</h3>
              <h4>Bloom Institute of Technology (formerly Lambda School), Remote<br/>September 2019 - September 2020</h4>
              <p>Full Stack Web Development & Computer Science</p>
              <p>Bloom Institute of Technology (formerly Lambda School) is a 9+ month accelerated program with an immersive (full-time, 40+ hours/week) hands-on curriculum with a focus on computer science, software engineering, and web development.</p>
              <div className='lambda-btn'>
                <img
                  src={lambdaBadge}
                  alt='Full-Stack Web Development + Technical Interviewing Bloom Institute of Technology (formerly Lambda School) badge'
                  className='badge-pic'
                />
                <Button
                  variant='contained'
                  color='secondary'
                  style={{ fontFamily: 'Kufam', borderWidth: '4px'}}
                  href='https://www.youracclaim.com/badges/f20e1df7-2a07-477e-887f-06ef174c9887/public_url'
                  alt='Full-Stack Web Development + Technical Interviewing badge issued by Bloom Institute of Technology (formerly Lambda School)'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Check out my verified Full-Stack Web Development + Technical Interviewing badge issued by Bloom Institute of Technology (formerly Lambda School)!
                </Button>
              </div>
              <h4>Baton Rouge Community College, Baton Rouge LA<br/>2011-2012</h4>
              <p>Associate of Applied Science, Entertainment Technology - Game Design</p>
              <h4>Pensacola Junior College, Pensacola FL<br/>2008-2010</h4>
              <p>Associate of Arts - AA, Computer Science</p>
            </section>
          </div>
        </section>
      </div>
    );
};
