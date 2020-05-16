import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <Navbar collapseOnSelect expand="lg" variant="fixed-top light">
      <Navbar.Toggle aria-controls="responsive-navbar-nav">M</Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/projects">Portfolio</Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/michelleamorin/" target="_blank" rel="noopener noreferrer">LinkedIn</Nav.Link>
          <Nav.Link href="https://github.com/michelle-morin" target="_blank" rel="noopener noreferrer">GitHub</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;