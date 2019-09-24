import React from 'react';
import './App.css';
import AboutMe from "./Components/AboutMe/AboutMe"
import Contact from "./Components/Contact/Contact"
import Gallery from "./Components/Gallery/Gallery"
import Landing from "./Components/Landing/Landing"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AboutMe/>
        <Contact/>
        <Gallery/>
        <Landing/>
      </header>
    </div>
  );
}

export default App;
