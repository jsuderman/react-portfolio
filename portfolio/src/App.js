import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
        <Link to="/"  component={About} />
        <Link to="/about"  component={About} />
        <Link to="/projects"  component={Projects} />
        <Link to="/contact"  component={Contact}/>
        <Link to="/resume"  component={Resume}/>
        <Foot />
      </div>
    </Router>
  );
}

export default App;
