import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/pages/About/about";
import Projects from "./components/pages/Projects/projects";
import Contact from "./components/pages/Contact/contact";
import Resume from "./components/pages/resume";
import Foot from "./components/foot";
import Navigation from './components/navigation';
import "./App.css"





function App() {
  return (
    <Router>
      <div className="App">


        <Navigation />
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/about" exact component={About} />
          <Route path="/projects" exact component={Projects} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/resume" exact component={Resume} />
        </Switch>
        

        <Foot />



      </div>

    </Router>

  );
}

export default App;
