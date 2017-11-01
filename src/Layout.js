import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import $ from 'jquery-ajax';
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import Signup from './Signup'
import Login from './Login'
import PublicProfile from './PublicProfile'
import Cities from './Cities'
import Post from './Post'
class Layout extends Component {
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
      return (
        <div>
            <Header />
              {this.props.children}
            <Footer />
        </div>
      );
    }
  }

export default Layout;
