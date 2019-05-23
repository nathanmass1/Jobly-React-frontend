import React, { Component } from 'react';
import Job from './Job';
import JoblyApi from '../JoblyApi';
import JobSearch from './JobSearch';





export default class Jobs extends Component {

  constructor(props) {
    super(props);
    this.state = {
      jobs: []
    }
    this.searchJobs = this.searchJobs.bind(this);
    this.getJobs = this.getJobs.bind(this);
  }



  async getJobs() {
    let data = await JoblyApi.getJobs()
    this.setState({ jobs: data});    
    
  }

  async searchJobs(search){
    let data = await JoblyApi.searchJobs(search)
    this.setState({ jobs: data });
  }


  async componentDidMount() {
    this.getJobs();
  }


  render() {
    return (
      <div className="jobs-page">
        <JobSearch searchJobs={this.searchJobs}/>
        <ol>
        {this.state.jobs.map(job => (
          <Job name = {job.title} salary={job.salary} equity={job.equity}  />
        ))}
        </ol>
      </div>
    )
  }
}


