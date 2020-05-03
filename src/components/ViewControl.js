import React from 'react';
import Header from './Header';
import Splash from './Splash';
import Bio from './Bio';
import ProjectList from './ProjectList';

function ViewControl() {
  return (
    <React.Fragment>
      <Header />
      <Splash />
      <Bio />
      <ProjectList />
    </React.Fragment>
  );
}

export default ViewControl;