import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import JoblyApi from './JoblyApi';
import './App.css';
import jwt from 'jsonwebtoken';

import Nav from './Components/Nav'
import Routes from './Components/Routes'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentUser: {
        loggedIn: false,
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        photo_url: ''
    }}
    this.handleLogout = this.handleLogout.bind(this);
    this.handleLoginForm = this.handleLoginForm.bind(this);
  }

  async componentDidMount() {
    if (localStorage.getItem('token')) {
      let userData = await this.getCurrentUser(localStorage.getItem('username'))
      this.setState({currentUser: {
        loggedIn: true,
        username: userData.username,
        first_name: userData.first_name,
        last_name: userData.last_name,
        email: userData.email,
        photo_url: userData.photo_url
      }})
    }
  }

  
  // Get user data, add to app state
  async getCurrentUser(username) {
    let data = await JoblyApi.getCurrentUser(username)
    return data;
    }

  handleLogout() {
    if (localStorage.token) {
      localStorage.clear();
      this.setState({ currentUser: {
        loggedIn: false,
        username: '',
        first_name: '',
        last_name: '',
        email: '',
        photo_url: ''
      }
      })
    }
  }

  handleLoginForm(user) {
    if (localStorage.token && user) {
      this.setState({currentUser: {
        loggedIn: true,
        username: user.username,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        photo_url: user.photo_url
      }
      })
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav handleLogout={this.handleLogout} loggedIn={this.state.currentUser.loggedIn} currentUser={this.state.currentUser} />
          <Routes handleLoginForm={this.handleLoginForm} loggedIn={this.state.loggedIn} currentUser={this.state.currentUser} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
