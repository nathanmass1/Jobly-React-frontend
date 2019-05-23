import React, { Component } from 'react'
import '../Styles/home.css';



export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      className: ''
    }
  }

  componentDidMount(){
    if(!localStorage.getItem('token')){
      this.setState({
        className: 'loginButton'
      })
    }else{
      this.setState({
        className: 'd-none'
      })
    }
  }



  render() {
    return (
      <div className="home-page">
      <h1 className="test">Hello</h1>
        <h1>Welcome to Jobly (Home) </h1> 
        <button className = {this.state.className}>Log In</button>
      </div>
    )
  }
}
