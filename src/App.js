import React from 'react';
import Header from "./ui/Header.js"
import GridDisplay from "./grid/GridDisplay.js";
import './App.css';

function App() {

const container = {
  backgroundColor: "#f0f0f0",
  backgroundSize: "cover"
}
  return (
    <div style={container}>
      <Header />
      <GridDisplay />
    </div>


  );
}

export default App;
