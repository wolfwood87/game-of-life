import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Grid from "./grid/Grid";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Grid}/>
      </BrowserRouter>
  );
}

export default App;
