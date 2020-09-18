import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
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
        <Route exact path="portfolio/about"  component={About} />
        <Route exact path="portfolio/about"  component={About} />
        <Route exact path="portfolio/projects"  component={Projects} />
        <Route exact path="portfolio/contact"  component={Contact}/>
        <Route exact path="portfolio/resume"  component={Resume}/>
        <Foot />
      </div>
    </Router>
  );
}

export default App;
