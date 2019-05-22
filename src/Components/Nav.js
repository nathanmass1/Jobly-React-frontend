import React, { Component } from "react";
import { Link } from "react-router-dom";
// import './Nav.css';


class Nav extends Component {
  render() {
    return (<div className="nav-bar">
      <br></br>
      <h1 className='header-text'><Link to="/">Jobly</Link></h1> 
      <h1 className='header-text'><Link to="/companies">Companies</Link></h1>
      <h1 className='header-text'><Link to="/jobs">Jobs</Link></h1>
      <h1 className='header-text'><Link to="/profile">Profile</Link></h1>
      <h1 className='header-text'><Link to="/login">Login</Link></h1>
      <br></br>
      </div>
    );
  }
} 


export default Nav;