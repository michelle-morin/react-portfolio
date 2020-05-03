import React from 'react';
import { Container } from 'react-bootstrap';
import TaproomImg from './TaproomImg';
import BakeryImg from './BakeryImg';
import TSImg from './TSImg';
import ParkImg from './ParkImg';
import SalonImg from './SalonImg';
import CampImg from './CampImg';

function ProjectList() {

  return(
    <Container fluid id="projects">
      <h2>Recent Projects</h2>
      <div className="project-cards">
        <div className="frame taproom-frame">
          <h4>Taproom </h4>
          <div className="img-wrapper">
            <TaproomImg className="taproom" />
          </div>
          <p>Taproom point-of-sale application built using React, Redux, JavaScript, JSX, and React Bootstrap</p>
          <p><a href="https://github.com/michelle-morin/redux-taproom" target="_blank" rel="noopener noreferrer">View Source</a>  |  <a href="https://michelle-morin.github.io/redux-taproom/" target="_blank" rel="noopener noreferrer">Open App</a></p>
        </div>
        <div className="frame treasure-frame">
          <h4>Treasure Sweep</h4>
          <div className="img-wrapper">
            <TSImg className="treasure" />
          </div>
          <p>Team project built using C#, ASP.NET Core MVC, JavaScript, and Docker</p>
          <p><a href="https://github.com/michelle-morin/TreasureSweepGame.Solution" target="_blank" rel="noopener noreferrer">View Source</a>  |  <a href="http://treasuresweepgame.herokuapp.com/" target="_blank" rel="noopener noreferrer">Play on Heroku</a></p>
        </div>
        <div className="frame park-frame">
          <h4>Park Finder</h4>
          <div className="img-wrapper">
            <ParkImg className="parks" />
          </div>
          <p>ASP.NET Core MVC application for communicating with a RESTful web API</p>
          <p><a href="https://github.com/michelle-morin/ParksClient.Solution" target="_blank" rel="noopener noreferrer">View Source</a>  |  <a href="https://github.com/michelle-morin/ParksLookup.Solution" target="_blank" rel="noopener noreferrer">View API Source</a></p>
        </div>
        <div className="frame bakery-frame">
          <h4>Bakery Vendor Tracker</h4>
          <div className="img-wrapper">
            <BakeryImg className="bakery" />
          </div>
          <p>ASP.NET Core MVC application implementing a relational database, authentication, and authorization</p>
          <p><a href="https://github.com/michelle-morin/PierreTreats.Solution" target="_blank" rel="noopener noreferrer">View Source</a></p>
        </div>
        <div className="frame salon-frame">
          <h4>Hair Salon CRM</h4>
          <div className="img-wrapper">
            <SalonImg className="salon" />
          </div>
          <p>ASP.NET Core MVP application implementing a relational database, authentication, and authorization</p>
          <p><a href="https://github.com/michelle-morin/HairSalon.Solution" target="_blank" rel="noopener noreferrer">View Source</a></p>
        </div>
        <div className="frame camping-frame">
          <h4>Camping Trip Planner</h4>
          <div className="img-wrapper">
            <CampImg className="camping" />
          </div>
          <p>Team project built using JavaScript, jQuery, HTML drag & drop UI, and several APIs</p>
          <p><a href="https://github.com/michelle-morin/camping" target="_blank" rel="noopener noreferrer">View Source</a></p>
        </div>
      </div>
    </Container>
  );
}

export default ProjectList;