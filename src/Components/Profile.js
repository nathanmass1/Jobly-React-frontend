import React, { Component } from 'react'
import JoblyApi from '../JoblyApi';



export default class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentUser: {
        password: '',
        first_name: '',
        last_name: '',
        email: '',
        photo_url: ''
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    if (localStorage.getItem('token')) {
      let userData = await JoblyApi.getCurrentUser(localStorage.getItem('username'))
      console.log("USERDATA", userData);
      this.setState({
        currentUser: {
          password: userData.password,
          first_name: userData.first_name,
          last_name: userData.last_name,
          email: userData.email,
          photo_url: userData.photo_url

        }
      })
    }
  }

  handleChange(evt) {
    this.setState({ currentUser: {...this.state.currentUser, [evt.target.name]: evt.target.value }});
  }


  async handleSubmit(evt) {

    const {currentUser} = this.state
    console.log("CURRENT USER", currentUser);
    // Need to re-write (should call edit API function)
    // Give edit API function username and updated state
    // Need to set state based on existing state in apps
    // To get current user data, call API function getCurrentUser then pass that data into edit API function as object 
    evt.preventDefault();
   await JoblyApi.updateUser(localStorage.getItem('username'), currentUser );
    // this.props.handleLoginForm(user);
  }


  render() {

    return (
      <div className="profile-page">
        <h1>Profile</h1>
        <div className="d-block">
          <form onSubmit={this.handleSubmit}>

            <span className="p-2">
              <h3> {localStorage.getItem('username')}</h3>

            </span>

            <span className="p-2">
              <label htmlFor="firstName"></label>
              <input id="firstName" name="first_name"
                onChange={this.handleChange}
                placeholder={this.state.currentUser.first_name}
                required />
            </span>

            <span className="p-2">
              <label htmlFor="lastName"></label>
              <input id="lastName" name="last_name"
                value={this.state.currentUser.last_name}
                onChange={this.handleChange}
                placeholder={this.state.currentUser.last_name}
                required />
            </span>

            <span className="p-2">
              <label htmlFor="email"></label>
              <input id="email" name="email"
                value={this.state.currentUser.email}
                onChange={this.handleChange}
                placeholder={this.state.currentUser.email}
                required />
            </span>
            <span className="p-2">
              <label htmlFor="photo_url"></label>
              <input id="photo_url" name="photo_url"
                value={this.state.currentUser.photo_url}
                onChange={this.handleChange}
                placeholder={this.state.currentUser.photo_url || "Photo URL"}
                required />
            </span>
            <span className="p-2">
              <label htmlFor="password"></label>
              <input id="password" name="password"
                value={this.state.password}
                onChange={this.handleChange}
                placeholder="Re-enter password"
                required />
            </span>

            <div>
              <button>Save Changes</button>
            </div>

          </form>
        </div>

      </div>
    )
  }
}

