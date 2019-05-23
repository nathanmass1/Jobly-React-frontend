import React, { Component } from 'react'
import '../Styles/job.css'

export default class Job extends Component {
  render() {
    const styleObj = { width: "auto" }

    return (
      <div className="card" style={styleObj}>
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <p className="card-text">Salary: {this.props.salary}</p>
          <p className="card-text">Equity: {this.props.equity}</p>
          <button type="button" class="btn btn-primary" style={{ width: "100px", margin: "0 auto" }}>Apply</button>
        </div>
      </div>
    )
  }
}


