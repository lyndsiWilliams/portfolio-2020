// React
import React from 'react';
// Styling
import '../styling/Home.css';
import meBlue from '../images/meBlue.jpg';


export const Home = () => {
    return (
      <div className="card-wrapper">
        <section className="intro-card">
            <img src={meBlue} alt="Lyndsi Kay Williams" className="home-pic" />
            <div className="text-wrapper">
              <h1>Lyndsi Kay Williams</h1>
              <h2>Full Stack Web Developer</h2>
              <section className="skills">
                <h3>Skills</h3>
                <p>React/Redux | Jest/Cypress Unit Testing | RESTful API | Deployment | Git | NodeJS | Express | SQLite3 | Javascript | Python | HTML | CSS | LESS/SASS</p>
              </section>
            </div>
        </section>
      </div>
    );
};