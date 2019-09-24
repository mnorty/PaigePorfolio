import React from 'react';
import './App.css';
import AboutMe from "./Components/AboutMe/AboutMe"
import Contact from "./Components/Contact/Contact"
import Gallery from "./Components/Gallery/Gallery"
import Landing from "./Components/Landing/Landing"
import router from "../src/router"

function App() {
  return (
    <div className="App">
      {router}
    </div>
  );
}

export default App;
