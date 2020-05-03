import React from 'react';
import { Container } from 'react-bootstrap';

function ProjectList() {
  return(
    <Container fluid id="projects">
      <h2>Recent Projects</h2>
      <div className="project-cards">
        <div className="frame taproom-frame">
          <h4>Taproom</h4>
          <div className="img-wrapper">
            <img className="taproom" src="assets/images/taproom.png"></img>
          </div>
          <p>Taproom point-of-sale application built using React, Redux, JavaScript, JSX, and React Bootstrap</p>
          <p><a href="https://github.com/michelle-morin/redux-taproom" target="_blank">View Source</a>  |  <a href="https://michelle-morin.github.io/redux-taproom/" target="_blank">Open App</a></p>
        </div>
        <div className="frame treasure-frame">
          <h4>Treasure Sweep</h4>
          <div className="img-wrapper">
            <img className="treasure" src="assets/images/ts.png"></img>
          </div>
          <p>Team project built using C#, ASP.NET Core MVC, JavaScript, and Docker</p>
          <p><a href="https://github.com/michelle-morin/TreasureSweepGame.Solution" target="_blank">View Source</a>  |  <a href="http://treasuresweepgame.herokuapp.com/" target="_blank">Play on Heroku</a></p>
        </div>
        <div className="frame park-frame">
          <h4>Park Finder</h4>
          <div className="img-wrapper">
            <img className="parks" src="assets/images/parklookup.png"></img>
          </div>
          <p>ASP.NET Core MVC application for communicating with a RESTful web API</p>
          <p><a href="https://github.com/michelle-morin/ParksClient.Solution" target="_blank">View Source</a>  |  <a href="https://github.com/michelle-morin/ParksLookup.Solution" target="_blank">View API Source</a></p>
        </div>
        <div className="frame bakery-frame">
          <h4>Bakery Vendor Tracker</h4>
          <div className="img-wrapper">
            <img className="bakery" src="assets/images/bakery.png"></img>
          </div>
          <p>ASP.NET Core MVC application implementing a relational database, authentication, and authorization</p>
          <p><a href="https://github.com/michelle-morin/PierreTreats.Solution" target="_blank">View Source</a></p>
        </div>
        <div className="frame salon-frame">
          <h4>Hair Salon CRM</h4>
          <div className="img-wrapper">
            <img className="salon" src="assets/images/salon.png"></img>
          </div>
          <p>ASP.NET Core MVP application implementing a relational database, authentication, and authorization</p>
          <p><a href="https://github.com/michelle-morin/HairSalon.Solution" target="_blank">View Source</a></p>
        </div>
        <div className="frame camping-frame">
          <h4>Camping Trip Planner</h4>
          <div className="img-wrapper">
            <img className="camping" src="assets/images/camp.png"></img>
          </div>
          <p>Team project built using JavaScript, jQuery, HTML drag & drop UI, and several APIs</p>
          <p><a href="https://github.com/michelle-morin/camping" target="_blank">View Source</a></p>
        </div>
      </div>
    </Container>
  );
}

export default ProjectList;