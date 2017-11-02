import React, { Component } from 'react';
import $ from 'jquery-ajax';
// import {browserHistory} from 'react-router';
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
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
      // browserHistory.push('/profile');
      this.setState({isAuthenticated: true});
    }, err => {
      console.log("we hit an error")
      console.log(err);
    });
  }

  shouldShowHome(){

  }

    render() {
      console.log("IS AUTHED in layout", this.state.isAuthenticated)
        return (
          <div>
              <Header
                login={this.handleLoginSubmit.bind(this)}
                isAuthed={this.state.isAuthenticated}
              />
                {this.state.id !== '' ? <PublicProfile /> : <Home />}
                {this.props.children}
              <Footer />
          </div>
        )

    }
  }

export default Layout;
