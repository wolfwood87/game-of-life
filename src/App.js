import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./ui/Header.js"
import GridDisplay from "./grid/GridDisplay.js";
import './App.css';

function App() {


  return (
    <div>
      <Header />
      <GridDisplay />
    </div>


  );
}

export default App;
