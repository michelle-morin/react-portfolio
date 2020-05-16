import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Splash from './Splash';
import Bio from './Bio';
import ProjectList from './ProjectList';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Switch>
          <Route path="/projects">
            <ProjectList />
          </Route>
          <Route path="/about">
            <Bio />
          </Route>
          <Route path="/">
            <Splash />
          </Route>
        </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;