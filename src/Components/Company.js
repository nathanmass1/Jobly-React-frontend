import React, { Component } from 'react'
import { Link } from "react-router-dom";

import '../Styles/company.css'

export default class Company extends Component {
  render() {
    const styleObj = {width: "auto"}
    
    return (
      <Link to={`/companies/${this.props.handle}`}>
      <div className="card-body">
      <div className="card" style={styleObj}>
          <h5 className="card-title">{this.props.name}</h5>
          <p className="card-text">{this.props.description}</p>
          <img className="card-img-bottom" style={{height: "100px", width: "100px", margin: "0 auto"}}src={this.props.logo_url} alt="Cardcap"></img>
      </div>
      </div>
      </Link>
        )
      }
    }
    