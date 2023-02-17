// React
import React from 'react';
import { Link } from 'react-router-dom';
// Styling
import '../styling/Navbar.css';


export const Navbar = () => {
  return (
    <header>
      <div className="nav-bar">
        <Link to="/">About Me</Link>
        <Link to="/projects">Projects</Link>
      </div>
      <div className="title-card">
        <div className="artifacts" data-testid="artifacts">
          <a
            href="https://www.linkedin.com/in/lyndsiwilliams/"
            target="_blank"
            rel="noopener noreferrer"
          >LinkedIn</a> | 
          <a
            href="https://docs.google.com/document/d/1sIeUKgb66eY6x4j_ds-gc3JoEtYQwGtT8Axwcoa0t6Q/view"
            target="_blank"
            rel="noopener noreferrer"
          >Resume</a> | 
          <a
            href="mailto:lyndsikaywilliams@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >Email</a> | 
          <a
            href="https://github.com/lyndsiWilliams"
            target="_blank"
            rel="noopener noreferrer"
          >GitHub</a>
        </div>
        <h1>Lyndsi Kay Williams</h1>
        <h2>Frontend Web Developer</h2>
      </div>
    </header>
  );
};
