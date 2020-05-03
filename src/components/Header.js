import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav } from 'react-bootstrap';

function Header(props){
  return (
    <Navbar collapseOnSelect expand="lg" variant="fixed-top light">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link onClick={props.onSplashClick}>Home</Nav.Link>
          <Nav.Link onClick={props.onBioClick}>About</Nav.Link>
          <Nav.Link onClick={props.onProjectsClick}>Portfolio</Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/michelleamorin/" target="_blank">LinkedIn</Nav.Link>
          <Nav.Link href="https://github.com/michelle-morin" target="_blank">GitHub</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

Header.propTypes = {
  onSplashClick: PropTypes.func,
  onBioClick: PropTypes.func,
  onProjectsClick: PropTypes.func
}

export default Header;