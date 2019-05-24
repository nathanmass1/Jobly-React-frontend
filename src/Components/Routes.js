import React, { Component } from 'react'
import { Route, Switch, Redirect } from "react-router-dom"
import Home from './Home'
import Companies from './Companies'
import CompanyPage from './CompanyPage'
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
          render={routerProps => this.props.currentUser.loggedIn ? <Companies {...routerProps} /> : <Redirect to="/login" />
          } />
           <Route exact path="/companies/:name"
          render={routerProps => this.props.currentUser.loggedIn ? <CompanyPage {...routerProps}  /> : <Redirect to="/login" />
          } />
        <Route exact path="/jobs"
          render={routerProps => this.props.currentUser.loggedIn ? <Jobs {...routerProps} /> : <Redirect to="/login" />
          } />
        <Route exact path="/profile"
          render={routerProps => this.props.currentUser.loggedIn ? <Profile {...routerProps} /> : <Redirect to="/login" />
        } />
        <Route exact path="/login"
          render={routerProps => <Login currentUser={this.props.currentUser} handleLoginForm={this.props.handleLoginForm} {...routerProps} />} />
        <Route exact path="/register"
          render={routerProps => <Register handleLoginForm={this.props.handleLoginForm} {...routerProps} />} />
      </Switch>
    )
  }
}
