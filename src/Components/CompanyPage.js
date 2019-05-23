import React, { Component } from 'react'
import JoblyApi from '../JoblyApi'



export default class CompanyPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      company: []
    }
    this.getCompany = this.getCompany.bind(this);
  }



  async getCompany(search){
    let data = await JoblyApi.getCompany(search);
    this.setState({ company: data})
  } 

  async componentDidMount() {
    await this.getCompany(this.props.match.params.name);
  }

  render() {
    return (
      <div className="company-info">
        <h1>{this.state.company.name}</h1> 
        <h2>Number of Employees: {this.state.company.num_employees}</h2> 
        <p>Company Description: </p> <br></br><p>{this.state.company.description}</p>
      </div>
    )
  }
}

