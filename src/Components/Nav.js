import React, { Component } from "react";
import { Link } from "react-router-dom";
// import './Nav.css';


class Nav extends Component {


  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Jobly</Link><span className="sr-only">(current)</span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/companies">Companies</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/jobs">Jobs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/profile">Profile</Link>
            </li>
            <li className="nav-item">
              <Link onClick= {this.props.handleLogout} className="nav-link" to="/login">{this.props.loggedIn ? 'Logout' : 'Login'}</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/register">{this.props.loggedIn ? '' : 'Register'}</Link>
          </li>
            
          </ul>
        </div>
      </nav>
    );
  }
}


export default Nav;


