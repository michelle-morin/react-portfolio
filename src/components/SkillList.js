import React from 'react';
import { Accordion, Card } from 'react-bootstrap';

function SkillList() {
  return (
    <Accordion id="skills-list">
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="headingOne">
          Languages
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="headingOne">
          <Card.Body>
            <p>JavaScript</p>
            <p>JSX</p>
            <p>C#</p>
            <p>HTML</p>
            <p>CSS</p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="headingTwo">
          Tools
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="headingTwo">
          <Card.Body>
          <p>Git, CLI</p>
          <p>Postman</p>
          <p>Webpack</p>
          <p>npm</p>
          <p>ESLint</p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="headingThree">
          Front-end
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="headingThree">
          <Card.Body>
          <p>React.js</p>
          <p>Redux</p>
          <p>jQuery</p>
          <p>Bootstrap</p>
          <p>Media queries</p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="headingFour">
          Back-end/Data
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="headingFour">
          <Card.Body>
          <p>.NET Core, ASP.NET Core</p>
          <p>Authentication & Authorization</p>
          <p>Entity Framework Core</p>
          <p>REST APIs</p>
          <p>MySQL</p>
          <p>Firebase (NoSQL)</p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Accordion.Toggle as={Card.Header} eventKey="headingFive">
          Etcetera
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="headingFive">
          <Card.Body>
          <p>BDD & TDD</p>
          <p>Testing (Jest, MSTest)</p>
          <p>Object-Oriented Programming</p>
          <p>Functional Programming</p>
          <p>Pair & Mob Programming</p>
          <p>Technical Writing</p>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default SkillList;