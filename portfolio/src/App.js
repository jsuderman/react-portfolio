import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/pages/About/about";
import Projects from "./components/pages/Projects/projects";
import Contact from "./components/pages/contact";
import Resume from "./components/pages/resume";
import Foot from "./components/foot";
import Navigation from './components/navigation';
import "./App.css"
import SinglePagePDFViewer from "./components/resumePDF/single-page";
import AllPagesPDFViewer from "./components/resumePDF/all-pages";




function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Route exact path="/"  component={About} />
        <Route exact path="/about"  component={About} />
        <Route exact path="/projects"  component={Projects} />
        <Route exact path="/contact"  component={Contact}/>
        <Route exact path="/resume"  component={Resume}/>
        <Foot />
      </div>
    </Router>
  );
}

export default App;
