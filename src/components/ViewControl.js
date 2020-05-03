import React from 'react';
import Header from './Header';
import Splash from './Splash';
import Bio from './Bio';
import ProjectList from './ProjectList';
import * as a from './../actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


function ViewControl(props) {
  const { dispatch } = props;

  const handleSplashClick = () => {
    const action = a.splash();
    dispatch(action);
  };

  const handleBioClick = () => {
    const action = a.bio();
    dispatch(action);
  }

  const handleProjectsClick = () => {
    const action = a.projects();
    dispatch(action);
  }

  let displayedView;
  if (props.currentView === "splash") {
    displayedView = <Splash />
  } else if (props.currentView === "bio") {
    displayedView = <Bio />
  } else if (props.currentView === "projects") {
    displayedView = < ProjectList />
  }

  return (
    <React.Fragment>
      <Header 
        onBioClick={handleBioClick}
        onProjectsClick={handleProjectsClick}
        onSplashClick={handleSplashClick} />
      {displayedView}
    </React.Fragment>
  );
}

ViewControl.propTypes = {
  currentView: PropTypes.string
}

const mapStateToProps = state => {
  return {
    currentView: state
  }
}

ViewControl = connect(mapStateToProps)(ViewControl);

export default ViewControl;