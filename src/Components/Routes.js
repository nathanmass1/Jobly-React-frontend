import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import Home from './Home'
import Companies from './Companies'
import Jobs from './Jobs'
import Profile from './Profile'
import Login from './Login'



export default class Routes extends Component {

  constructor(props){
    super(props);
    this.state = {
      loggedIn: false
    }
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(token){
    if(localStorage.token){
      this.setState({
        loggedIn: true
      }) 
    }
  }


  render() {
    return (
      <Switch>
        <Route exact path ="/"
        render = {routerProps => <Home {...routerProps}/>} />
        <Route exact path ="/companies"
        render = {routerProps => <Companies {...routerProps}/>} />
        <Route exact path ="/jobs"
        render = {routerProps => <Jobs {...routerProps}/>} />
        <Route exact path ="/profile"
        render = {routerProps => <Profile {...routerProps}/>} />
        <Route exact path ="/login"
        render = {routerProps => <Login handleLogin={this.handleLogin} {...routerProps}/>} />


      </Switch>
    )
  }
}
