import React, {Component} from 'react'
import $ from 'jquery-ajax';
import {browserHistory} from 'react-router';

class Login extends Component{
  testUser=[
    {
      username: 'test123',
      password: 111
    }
  ]
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
      url: `http://localhost:3001/login`,
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
      <div>
        <div id="loginPage" class="bg-1">
          <div class="container">
            <h3 class="text-center">Login</h3>
            <form class="form-horizontal" onSubmit={ this.props.handleSubmit }>
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

export default Login