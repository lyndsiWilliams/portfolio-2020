// React
import React from 'react';
import { Link } from 'react-router-dom';
// Styling
import '../styling/Projects.css';


export const Projects = () => {
  return (
    <div className="card-container">
      <div className="project-card">
        <div className="link-btns">
          <a
            href="https://citrics.netlify.app/"
            target="_blank"
            style={{ borderTopLeftRadius: "20px" }}
          >
            Deployment
          </a>
          <a
            href="https://github.com/labs26-citrics/Labs26-Citrics-FE-TeamB"
            target="_blank"
            style={{ borderTopRightRadius: "20px" }}
          >
            Github
          </a>
        </div>
        <h3>Citrics / Lambda labs project</h3>
        <h4 style={{ textAlign: "center" }}>ReactJS | Redux | Ant.Design</h4>
        <div className="description">
          <p>An app designed to help users research and compare cities while searching for a new home.</p>
          <p>• Collaborated with 4 web and 2 data science team members during an 8-week simulated work environment</p>
          <p>• Constructed and maintained the team <span href="https://whimsical.com/341zvP6EuiJdMGJt3neFJa">flowchart</span> and <span href="https://whimsical.com/T5VcCfKv8TwyKzgjfUnAeE">wireframe</span></p>
          <p>• Solely responsible for creating and styling the team’s <span href="https://b.citrics.dev/about">About page</span></p>
          <p>• Utilized the Redux state management system to manage data on the front end</p>
          <p>• Communicated with our team project lead in order to touch base with our stakeholder, implementing any changes to properly implement his product vision</p>
        </div>
      </div>
      <div className="project-card">
        <div className="link-btns">
          <a
            href="https://med-cabinet-3.now.sh/"
            target="_blank"
            style={{ borderTopLeftRadius: "20px" }}
          >
            Deployment
          </a>
          <a
            href="https://github.com/bw-med-cabinet-3/Front-End"
            target="_blank"
            style={{ borderTopRightRadius: "20px" }}
          >
            Github
          </a>
        </div>
        <h3>Med Cabinet / React II developer</h3>
        <h4 style={{ textAlign: "center" }}>Skills | Utilized | On | Project</h4>
        <div className="description">
          <p>An app designed to help users find the best medical marijuana strain for their needs.</p>
          <p>• Collaborated with 3 web and 3 data science team members during a 4-day sprint</p>
          <p>• Solely responsible for incorporating Redux as a state management system</p>
          <p>• Created client-side authentication</p>
        </div>
      </div>
      <div className="project-card">
        <div className="link-btns">
          <a
            href="https://lyndsis-game-of-life.now.sh"
            target="_blank"
            style={{ borderTopLeftRadius: "20px" }}
          >
            Deployment
          </a>
          <a
            href="https://github.com/lyndsiWilliams/React-Redux-App"
            target="_blank"
            style={{ borderTopRightRadius: "20px" }}
          >
            Github
          </a>
        </div>
        <h3>Conway’s Game of Life / Personal project</h3>
        <h4 style={{ textAlign: "center" }}>ReactJS | CSS</h4>
        <div className="description">
          <p>An app to display a deceptively simple simulation of an environment where simple rules produce great complexity over time.</p>
          <p>• Created a graph and styled the display purely with CSS</p>
          <p>• Applied Conway's rules for the Game of Life to each cell in the graph</p>
          <p>• Implemented extra functionality: User can make the cell sizes smaller or larger, and user can populate the graph with a random assortment of living cells.</p>
        </div>
      </div>


    {/* ---------- EXAMPLE CARD, TO BE MADE DYNAMIC LATER ----------

      <div className="project-card">
        <div className="link-btns">
          <a
            href="#"
            target="_blank"
            style={{ borderTopLeftRadius: "20px" }}
          >
            Deployment
          </a>
          <a
            href="#"
            target="_blank"
            style={{ borderTopRightRadius: "20px" }}
          >
            Github
          </a>
        </div>
        <h3>Project Title</h3>
        <h4 style={{ textAlign: "center" }}>Skills | Utilized | On | Project</h4>
        <div className="description">
          <p>This is where a description of the app will go</p>
          <p>• I'll put a couple</p>
          <p>• Key points about</p>
          <p>• The project here</p>
        </div>
      </div> */}
    </div>
  );
};
