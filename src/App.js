import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import About from "./components/pages/About/about";
import Projects from "./components/pages/Projects/projects";
import Contact from "./components/pages/Contact/contact";
import Resume from "./components/pages/resume";
import Foot from "./components/foot";
import Navigation from './components/navigation';
import "./App.css"





class App extends Component {
  render() {

    return(
    
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" component={About} />
          <Route path="/about"  component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact"  component={Contact} />
          <Route path="/resume"  component={Resume} />
        </Switch>
        <Foot />
      </div>
    );

  };
}


export default App;