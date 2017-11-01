import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import $ from 'jquery-ajax';
import Home from './Home'

class Layout extends Component {
  // constructor(props){
  //   super(props)
  //   this.state={
  //     username: '', password: '', id:'', isAuthenticated: false
  //   };
  //   this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  //   this.handleLoginPasswordChange = this.handleLoginPasswordChange.bind(this);
  //   this.handleLoginUsernameChange = this.handleLoginUsernameChange.bind(this);
  //   this.handleLogout = this.handleLogout.bind(this);
  // }
  // handleLoginSubmit(e){
  //   e.preventDefault();
  //   let username = this.state.username;
  //   let password = this.state.password;
  //   $.ajax({
  //     method: 'POST',
  //     url: `http://localhost:3001/login`,
  //     data: {
  //       username: username,
  //       password: password
  //     }
  //   })
  //   .then(res => {
  //     console.log('res is ', res);
  //     this.setState({isAuthenticated: true, id:res._id});
  //   }, err => {
  //     console.log('oops!');
  //     console.log(err);
  //   });
  // }
  // handleLogout(){
  //     this.setState({isAuthenticated: false, id:''});
  // }
  // handleLoginUsernameChange(e){
  //   this.setState({username: e.target.value});
  // }
  // handleLoginPasswordChange(e){
  //   this.setState({password: e.target.value});
  // }
  // getInitialState(){
  //     return {
  //       isAuthenticated : false
  //     }
  //   }

    render() {
      return (
        <div>

          <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container-fluid">
              <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#myPage"><img src="img/ladybug.png" height="28"/></a>
                <p id="brandInitials">WF</p>
              </div>
              <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav navbar-right">
                  <li><a href="#tour">SIGN UP</a></li>
                  <li><a href="#contact">LOG IN</a></li>
                </ul>
              </div>
            </div>
          </nav>

          <Home />

          <footer class="text-center">
            <a class="up-arrow" href="#myPage" data-toggle="tooltip" title="TO TOP">
          <span class="glyphicon glyphicon-chevron-up"></span>
        </a>
            <p id="appName">Wayfarer</p>
            <p id="createdBy">Created by Stephanie, Austin and Tahl</p>
          </footer>
        </div>

      );
    }
  }
export default Layout;
