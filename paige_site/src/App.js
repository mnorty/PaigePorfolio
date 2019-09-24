import React from 'react';
import './App.css';
import router from "../src/router"
import NavBar from "../src/Components/NavBar/NavBar"

function App() {
  return (
    <div className="App">
      <NavBar/>
      {router}
    </div>
  );
}

export default App;
