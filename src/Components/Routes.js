import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom"
import Home from './Home'
import Companies from './Companies'
import Jobs from './Jobs'
import Profile from './Profile'
import Login from './Login'
import Register from './Register';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/"
          render={routerProps => <Home {...routerProps} />} />
        <Route exact path="/companies"
          render={routerProps => <Companies {...routerProps} />} />
        <Route exact path="/jobs"
          render={routerProps => <Jobs {...routerProps} />} />
        <Route exact path="/profile"
          render={routerProps => <Profile {...routerProps} />} />
        <Route exact path="/login"
          render={routerProps => <Login handleLoginForm={this.props.handleLoginForm} {...routerProps} />} />
        <Route exact path="/register"
          render={routerProps => <Register handleLoginForm={this.props.handleLoginForm} {...routerProps} />} />
      </Switch>
    )
  }
}
