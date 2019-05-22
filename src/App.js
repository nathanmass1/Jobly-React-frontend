import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import logo from './logo.svg';
import './App.css';

import Nav from './Components/Nav'
import Routes from './Components/Routes'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
