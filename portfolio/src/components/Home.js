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
              I am a full-stack web developer with a strong love for Front End. My passion for programming shows in my late-night adventures getting lost in my latest project. I ensure sustainable working practices by investing in breaks that typically involve video games. The Pomodoro technique will save your life in this career!
            </section>
            <section className='skills'>
              <h3>♦ Skills ♦</h3>
              <p>React/Redux | Jest/Cypress Unit Testing | RESTful API | Deployment | Git | NodeJS | Express | SQL | GraphQL | Javascript | Typescript | Python | HTML | CSS | LESS/SASS | Agile Methodology</p>
            </section>
            <section className='experience'>
              <h3>♦ Experience ♦</h3>
              <p style={{ textAlign: 'center', color: '#701dd6', fontSize: '1.2em', fontFamily: 'Lemonada' }}>Click each job for details!</p>
              <div className='experience-btns' data-testid='experience-btns'>
                <TeamLead />
                <POC />
              </div>
            </section>
            <section className='education' data-testid='education'>
              <h3>♦ Education ♦</h3>
              <h4>Lambda School, Remote<br/>September 2019 - September 2020</h4>
              <p>Full Stack Web Development & Computer Science</p>
              <p>Lambda School is a 9+ month accelerated program with an immersive (full-time, 40+ hours/week) hands-on curriculum with a focus on computer science, software engineering, and web development.</p>
              <div className='lambda-btn'>
                <img
                  src={lambdaBadge}
                  alt='Full-Stack Web Development + Technical Interviewing Lambda School badge'
                  className='badge-pic'
                />
                <Button
                  variant='contained'
                  color='secondary'
                  style={{ fontFamily: 'Kufam', borderWidth: '4px'}}
                  href='https://www.youracclaim.com/badges/f20e1df7-2a07-477e-887f-06ef174c9887/public_url'
                  alt='Full-Stack Web Development + Technical Interviewing badge issued by Lambda School'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Check out my verified Full-Stack Web Development + Technical Interviewing badge issued by Lambda School!
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
