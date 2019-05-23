import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import './App.css';

import Nav from './Components/Nav'
import Routes from './Components/Routes'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLoginForm = this.handleLoginForm.bind(this);
  }

  componentDidMount(){
    if(localStorage.getItem('token')){
      this.setState({
        loggedIn: true
      })
    }
  }

  handleLogin() {
    if (localStorage.token) {
      localStorage.clear();
      this.setState({
        loggedIn: false
      })
    } 
  }

  handleLoginForm(){
    if (localStorage.token) {
      this.setState({
        loggedIn: true
      })
    } 
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav  handleLogin={this.handleLogin} loggedIn={this.state.loggedIn} />
          <Routes handleLoginForm = {this.handleLoginForm} loggedIn={this.state.loggedIn} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
