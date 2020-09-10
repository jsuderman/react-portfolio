import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Projects from "./components/pages/projects";
import Contact from "./components/pages/contact";
import Resume from "./components/pages/resume";
import Header from "./components/header";
import Footer from "./components/footer";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/"  component={Home} />
        <Route exact path="/about"  component={About} />
        <Route exact path="/projects"  component={Projects} />
        <Route exact path="/contact"  component={Contact}/>
        <Route exact path="/resume"  component={Resume}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
