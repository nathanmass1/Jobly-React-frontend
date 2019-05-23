import React, { Component } from 'react'
import Company from './Company'
import JoblyApi from '../JoblyApi'
import Search from './Search'


export default class Companies extends Component {
  static defaultProps = {
    images: "https://planb-creative.co.uk/wp-content/uploads/loadericon2.png"
  }

  constructor(props) {
    super(props);
    this.state = {
      companies: []
    }
    this.getCompanies = this.getCompanies.bind(this);
    this.searchCompanies = this.searchCompanies.bind(this);
  }

  async getCompanies() {
    let data = await JoblyApi.getCompanies()
    this.setState({ companies: data});    
  }

  async searchCompanies(search){
    let data = await JoblyApi.filterCompanies(search);
    this.setState({ companies: data})
  } 

  async componentDidMount() {
    this.getCompanies();
  }

  render() {
    const {companies} = this.state

    return (
      <div className="companies-page">
        <h1>All Companies </h1> 
        <Search searchCompanies={this.searchCompanies} />
        <ol> 
        {companies.map(company => (
          <Company 
            key={company.handle}
            handle={company.handle}
            name={company.name}
            description={company.description}
            logo_url={this.props.images}
          />
        ))}
        </ol>

      </div>
    )
  }
}
