import React, { Component } from 'react'
import JoblyApi from '../JoblyApi';
import { Redirect } from 'react-router-dom';
import Job from './Job';


export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      first_name: '',
      last_name: '',
      email: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });

  }

  async handleSubmit(evt) {
    evt.preventDefault();
    let token = await JoblyApi.getNewUserToken(this.state);
    localStorage.setItem('token', JSON.stringify(token));
    let user = await JoblyApi.validateUser(this.state.username);
    this.props.handleLoginForm(user);
  }


  render() {
    if (localStorage.token) {
      return <Redirect to='/jobs' />
    }

    return (
      <div className="d-block">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <span className="p-2">
            <label htmlFor="username"></label>
            <input id="username" name="username"
              value={this.state.username}
              onChange={this.handleChange}
              placeholder="Username"
              required />
          </span>

          <span className="p-2">
            <label htmlFor="password"></label>
            <input id="password" name="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Password"
              required />
          </span>
          <span className="p-2">
            <label htmlFor="firstName"></label>
            <input id="firstName" name="first_name"
              value={this.state.firstName}
              onChange={this.handleChange}
              placeholder="First Name"
              required />
          </span>

          <span className="p-2">
            <label htmlFor="lastName"></label>
            <input id="lastName" name="last_name"
              value={this.state.lastName}
              onChange={this.handleChange}
              placeholder="Last Name"
              required />
          </span>

          <span className="p-2">
            <label htmlFor="email"></label>
            <input id="email" name="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Email"
              required />
          </span>

          <div>
          <button>Register</button>
          </div>

        </form>

      </div>
    )
  }
}
