import React, { Component } from 'react'


export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchCompanies(this.state.searchTerm);
    this.setState({
      searchTerm: ""
    });
  }

  render() {
    return (
      <div className="search-form">
        <form onSubmit={this.handleSubmit}>
          <div className="form-input">
            <label htmlFor="searchTerm"></label>
            <input
              name="searchTerm"
              id="form-element"
              value={this.state.searchTerm}
              placeholder="Enter Search Term"
              onChange={this.handleChange}
              required />
          </div>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
