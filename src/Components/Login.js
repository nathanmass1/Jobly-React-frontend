import React, { Component } from 'react'
import JoblyApi from '../JoblyApi';
import { Redirect }  from 'react-router-dom';


export default class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });

  }

  async handleSubmit(evt) {
    evt.preventDefault();
    let token = await JoblyApi.getToken(this.state);
    localStorage.setItem('token', JSON.stringify(token));
    this.props.handleLoginForm();
  }




  render() {
    if(localStorage.token){
      return <Redirect to='/jobs'/>
    }

    return (
      <div className="login-page">
        <h1>Login Page</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username"></label>
          <input id="username" name="username"
            value={this.state.username}
            onChange={this.handleChange}
            placeholder="Username"
            required />

          <label htmlFor="password"></label>
          <input id="password" name="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder="Password"
            required />

          <button>Login</button>

        </form>

      </div>
    )
  }
}
