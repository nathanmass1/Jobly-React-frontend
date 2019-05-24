import React, { Component } from 'react'
import '../Styles/job.css'
import '../Styles/button.css'

export default class Job extends Component {
  constructor(props){
    super(props);
    this.state = {
      buttonDisabled: ''
    }
    this.apply = this.apply.bind(this);
  }

  async apply(){
    let res = await this.props.apply(this.props.id, localStorage.getItem('username'), 'applied');
    console.log('HERES THE RESPONSE ', res);
    if(res.message === 'applied'){
      this.setState({
        buttonDisabled: 'disabled'
      })
    }
  }

  render() {
    const styleObj = { width: "auto" }
    console.log(this.props, 'job props');

  
    return (
      <div className="card" style={styleObj}>
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <p className="card-text">Salary: {this.props.salary}</p>
          <p className="card-text">Equity: {this.props.equity}</p>
          <button onClick={this.apply} type="button" className={`btn btn-primary ${this.state.buttonDisabled}`} style={{ width: "100px", margin: "0 auto" }}>Apply</button>
        </div>
      </div>
    )
  }
}


