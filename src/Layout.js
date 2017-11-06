import React, { Component } from 'react';
import $ from 'jquery-ajax';
import {browserHistory} from 'react-router';
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import Cities from './Cities'
import PublicProfile from './PublicProfile'

class Layout extends Component {
  constructor(props){
    super(props)
    this.state={
      id:'', isAuthenticated: false, path: this.props.location.pathname
    };
    console.log(this.state.path)
    console.log("STATE: ", this.state.id , this.state.isAuthenticated);

  }
  handleLoginSubmit(username, password, e){
    e.preventDefault();
    console.log("handling login submit")
    console.log(username)
    console.log(password)
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
      browserHistory.push('/cities');
      this.setState({isAuthenticated: true});
    }, err => {
      console.log("we hit an error with login!")
      console.log(err);
    });
  }
  handleSignupSubmit(username, password, e){
    e.preventDefault();
    console.log("handling Signup submit")
    console.log(username)
    console.log(password)
    //if password and confirm password match, run the fn
    //try bootstrap validator
    $.ajax({
      method: 'POST',
      url: `http://localhost:3001/signup`,
      data: {
        username: username,
        password: password
      }
    })
    .then(res => {
      //NEED TO FINISH THIS LOGIC!!!
      console.log('res is ', res);
      this.setState({isAuthenticated: true});
      browserHistory.push('/profile');
    }, err => {
      console.log("we hit an error with signup!")
      console.log(err);
    });
  }
  handleLogout(){
    console.log("logging out!");
    this.setState({isAuthenticated: false})
    browserHistory.push('/')
  }
  visitProfile(){
    browserHistory.push('/profile');
  }
  visitCities(){
    browserHistory.push('/cities');
  }

  shouldShowHome(){

  }

    render() {
      console.log("IS AUTHED in layout", this.state.isAuthenticated)
        return (
          <div>
              <Header
                login={this.handleLoginSubmit.bind(this)}
                signup={this.handleSignupSubmit.bind(this)}
                isAuthed={this.state.isAuthenticated}
                logout={this.handleLogout.bind(this)}
                myProfile={this.visitProfile.bind(this)}
                cities={this.visitCities.bind(this)}
              />
                {this.props.children}
              <Footer />
          </div>
        )

    }
  }

export default Layout;
