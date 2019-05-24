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
    this.apply = this.apply.bind(this);
  }



  async getJobs() {
    let data = await JoblyApi.getJobs()
    this.setState({ jobs: data});    
    
  }

  async searchJobs(search){
    let data = await JoblyApi.searchJobs(search)
    this.setState({ jobs: data });
  }

  async apply(jobId, username, state){
    let data = await JoblyApi.apply(jobId, username, state)
    return data;

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
          <Job id = {job.id} apply = {this.apply} name = {job.title} salary={job.salary} equity={job.equity} key={job.id}/>
        ))}
        </ol>
      </div>
    )
  }
}


