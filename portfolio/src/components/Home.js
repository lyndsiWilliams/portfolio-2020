// React
import React from 'react';
// Components
import TeamLead from './modals/TeamLead';
import POC from './modals/POC';
// Styling
import '../styling/Home.css';
import meBlue from '../images/meBlue.jpg';


export const Home = () => {
    return (
      <div className="card-wrapper">
        <div className="name-title">
          <h1>Lyndsi Kay Williams</h1>
          <h2>Full Stack Web Developer</h2>
        </div>
        <section className="intro-card">
            <img src={meBlue} alt="Lyndsi Kay Williams" className="home-pic" />
            <div className="text-wrapper">
              <div className="artifacts">
                <a
                  href="https://www.linkedin.com/in/lyndsiwilliams/"
                  target="_blank"
                >LinkedIn</a> | 
                <a
                  href="https://docs.google.com/document/d/1sIeUKgb66eY6x4j_ds-gc3JoEtYQwGtT8Axwcoa0t6Q/edit?usp=sharing"
                  target="_blank"
                >Resume</a> | 
                <a
                  href="mailto:lyndsikaywilliams@gmail.com"
                  target="_blank"
                >Email</a> | 
                <a
                  href="https://github.com/lyndsiWilliams"
                  target="_blank"
                >GitHub</a>
              </div>
              <section className="intro-text">
                I am a full-stack web developer with a strong love for Front End. My passion for programming shows in my late-night adventures getting lost in my latest project. I ensure sustainable working practices by investing in breaks that typically involve video games. The Pomodoro technique will save your life in this career!
              </section>
              <section className="skills">
                <h3>♦ Skills ♦</h3>
                <p>React/Redux | Jest/Cypress Unit Testing | RESTful API | Deployment | Git | NodeJS | Express | SQLite3 | Javascript | Python | HTML | CSS | LESS/SASS</p>
              </section>
              <section className="experience">
                <h3>♦ Experience ♦</h3>
                <p style={{ textAlign: "center", color: "#701dd6", fontSize: "1.2em", fontFamily: "Lemonada" }}>Click each job for details!</p>
                <div className="experience-btns">
                  <TeamLead />
                  <POC />
                </div>
              </section>
              <section className="education">
                <h3>♦ Education ♦</h3>
                <h4>Lambda School, Remote<br/>September 2019 - September 2020</h4>
                <p>Full Stack Web Development & Computer Science</p>
                <p>Lambda School is a 9+ month accelerated program with an immersive (full-time, 40+ hours/week) hands-on curriculum with a focus on computer science, software engineering, and web development.</p>
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