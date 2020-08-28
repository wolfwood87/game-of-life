import React from 'react';
import Header from "./ui/Header.js"
import GridDisplay from "./grid/GridDisplay.js";
import Rules from "./ui/Rules.js"
import About from "./ui/About.js"
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';

function App() {

const container = {
  backgroundColor: "#f5f5f5",
  backgroundSize: "cover"
}
  return (
    <BrowserRouter>
      <div style={container}>
        <Header />
        <Switch>
          <Route exact path="/" component={GridDisplay} />
          <Route exact path="/rules" component={Rules} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
