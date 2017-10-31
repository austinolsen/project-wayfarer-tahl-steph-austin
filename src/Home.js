import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import $ from 'jquery-ajax';

class Home extends Component {
  constructor(props){
    super(props)
    this.state={
      username: '', password: '', id:'', isAuthenticated: false
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleLoginPasswordChange = this.handleLoginPasswordChange.bind(this);
    this.handleLoginUsernameChange = this.handleLoginUsernameChange.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLoginSubmit(e){
    e.preventDefault();
    let username = this.state.username;
    let password = this.state.password;
    $.ajax({
      method: 'POST',
      url: `http://localhost:3001/login`,
      data: {
        username: username,
        password: password
      }
    })
    .then(res => {
      console.log('res is ', res);
      this.setState({isAuthenticated: true, id:res._id});
    }, err => {
      console.log('oops!');
      console.log(err);
    });
  }
  handleLogout(){
      this.setState({isAuthenticated: false, id:''});
  }
  handleLoginUsernameChange(e){
    this.setState({username: e.target.value});
  }
  handleLoginPasswordChange(e){
    this.setState({password: e.target.value});
  }
  getInitialState(){
      return {
        isAuthenticated : false
      }
    }

    render() {
      if(this.state.isAuthenticated === false){
      return (
        <div className="homePage">
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#myPage"><img src="img/ladybug.png" alt="ladybug-logo" height="28"/>WF</a>
              </div>
              <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="/signin">SIGN UP</a></li>
                  <li><a href="/signin">LOG IN</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      );
    } else {
      return (
        <div classNameName="homePage">
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#myPage"><img src="img/ladybug.png" alt="ladybug-logo" height="28"/>WF</a>
              </div>
              <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="/signin">LOG OUT</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      )
    }
  }
}
export default Home;
