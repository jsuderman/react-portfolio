import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home/home";
import About from "./components/pages/about";
import Projects from "./components/pages/projects";
import Contact from "./components/pages/contact";
import Resume from "./components/pages/resume";
import Nav from "./components/nav";



function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route exact path="/"  component={Home} />
        <Route exact path="/about"  component={About} />
        <Route exact path="/projects"  component={Projects} />
        <Route exact path="/contact"  component={Contact}/>
        <Route exact path="/resume"  component={Resume}/>
      </div>
    </Router>
  );
}

export default App;
