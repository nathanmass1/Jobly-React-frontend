import axios from 'axios'

class JoblyApi {
  static async request(endpoint, paramsOrData = {}, verb = "get") {
    let jsonString = localStorage.getItem('token');
    let token = JSON.parse(jsonString);
    paramsOrData._token = ( // for now, hardcode token for "testing"
    `${token}`);

    console.debug("API Call:", endpoint, paramsOrData, verb);

    try {
      return (await axios({
        method: verb,
        url: `http://localhost:3001/${endpoint}`,
        [verb === "get" ? "params" : "data"]: paramsOrData
      })).data;
      // axios sends query string data via the "params" key,
      // and request body data via the "data" key,
      // so the key we need depends on the HTTP verb
    }

    catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  // Get all companies matching search query
  static async filterCompanies(search) {
    let res = await this.request('companies', { search });
    return res.companies
  }

  // Get all companies on mount
  static async getCompanies() {
    let res = await this.request('companies');
    return res.companies
  }

  //Get all jobs
  static async getJobs() {
    let res = await this.request('jobs');
    return res.jobs
  }

  static async searchJobs(search) {
    let res = await this.request('jobs', { search });
    return res.jobs
  }

  static async getToken(userInfo) {
    let res = await this.request('login', { ...userInfo }, 'post')
    return res.token;

  }

  static async getNewUserToken(userInfo) {
    let res = await this.request('users', { ...userInfo }, 'post')
    return res.token;

  }

  static async validateUser(username){
    let res = await this.request(`users/${username}`, { ...username }, 'get');
    return res.user.username;
  }

  static async getCurrentUser(username) {
    let res = await this.request(`users/${username}`, { ...username }, 'get');
    return res.user;
  }

  static async updateUser(username, userInfo) {
    let res = await this.request(`users/${username}`, {...userInfo}, 'patch')
    return res.user;
  }

  static async apply(jobId, username, state){
    let res = await this.request(`jobs/${jobId}/apply`, {jobId, username, state}, 'post')
    console.log(res)
    return res;
  }


}

export default JoblyApi;