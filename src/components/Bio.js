import React from 'react';
import Photo from './Photo';
import IntroOne from './IntroOne';
import IntroTwo from './IntroTwo';
import SkillList from './SkillList';
import { Container } from 'react-bootstrap';

function Bio() {
  return(
    <Container fluid id="about">
        <div className="about-section">
          <div className="about-box top-left">
            <Photo />
          </div>
          <div className="about-box top-right">
            <IntroOne />
          </div>
          <div className="about-box bottom-left">
            <IntroTwo />
          </div>
          <div className="about-box bottom-right">
            <SkillList />
          </div>
        </div>
    </Container>
  );
}

export default Bio;