import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import $ from 'jquery-ajax';

class Home extends Component {
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
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <div class="carousel-inner" role="listbox">
            <div class="item active">
                <img src='img/San Francisco.jpg' alt="San Francisco" width="1200" height="600"/>
                <div class="carousel-caption">
                  <h3>San Francisco</h3>
                  <p class="titleMessage"> The atmosphere in San Francisco is lorum ipsum</p>
                </div>
            </div>
            <div class="item">
              <img src="img/New York.jpeg" alt="New York" width="1200" height="600"/>
              <div class="carousel-caption">
                <h3>New York</h3>
                <p class="titleMessage"> Thank you, New York! An inspiring night out</p>
              </div>
            </div>
            <div class="item">
              <img src="img/Vancouver.jpg" alt="Vancouver" width="1200" height="600"/>
              <div class="carousel-caption">
                <h3>Vancouver</h3>
                <p class="titleMessage">We had the best time playing at Vancouver</p>
              </div>
            </div>
          </div>
          <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
          <div id="Inspo"class="container text-center">
            <h3>Wayfarer is...</h3>
            <div class="row">
              <div class="col-sm-4">
                <p class="text-center"><strong>Inspiration</strong></p>
                <p>Put an image here</p>
              </div>
              <div class="col-sm-4">
                <p class="text-center"><strong>Knowledge</strong></p>
                <p>Put an image here</p>
              </div>
              <div class="col-sm-4">
                <p class="text-center"><strong>Community</strong></p>
                <p>Put an image here</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
export default Home;
