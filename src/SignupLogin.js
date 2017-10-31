import React, {Component} from 'react'
import {browserHistory} from 'react-router';
import $ from 'jquery-ajax';

class SignupLogin extends Component{
  constructor(props) {
    super(props);
    this.state = {
      username: '', password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
  }
  handleSubmit(e){
    e.preventDefault();
    let username = this.state.username;
    let password = this.state.password;
    console.log(this.state.username);
    $.ajax({
      method: 'POST',
      url: `http://localhost:3001/signup`,
      data: {
        username: username,
        password: password
      }
    })
    .then(res => {
      console.log('res is ', res);
      browserHistory.push('/login');
    }, err => {
      console.log(err);
    });
  }
  handleUsernameChange(e){
    this.setState({username: e.target.value});
    console.log(this.state.username)
  }
  handlePasswordChange(e){
    this.setState({password: e.target.value});
  }
  render(){
    return(
      <div id="signupPage">
        <div class="container">
          <h3 class="text-center">Sign up</h3>
          <form class="form-horizontal" onSubmit={ this.handleSubmit }>
            <input
                type="text"
                name="fullName"
                placeholder="full name"
                required
            />
            <input
                type="text"
                placeholder="location (optional)"
                optional
            />
            <input
                type="text"
                name="username"
                placeholder="username"
                required
            />
            <input
                type="password"
                name="password"
                placeholder="password"
                required
            />
            <input
                type="password"
                name="confirmPassword"
                placeholder="confirm password"
                required
            />
            <select name="avatar">
              <option selected value="tulip">Tulip</option>
              <option value="rose">Rose</option>
              <option value="iris">Iris</option>
            </select>
            <input
              id="signupBtn"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
        <div id="loginPage" class="bg-1">
          <div class="container">
            <h3 class="text-center">Login</h3>
            <form class="form-horizontal" onSubmit={ this.props.handleLoginSubmit }>
              <input
                  type="text"
                  name="username"
                  placeholder="username"
                  required
              />
              <input
                  type="password"
                  name="password"
                  placeholder="password"
                  required
              />
              <input
                  id="signupBtn"
                  type="submit"
                  value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default SignupLogin