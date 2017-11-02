import React, {Component} from 'react'
import $ from 'jquery-ajax';
import {browserHistory} from 'react-router';
import Modal from 'react-modal'

class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {
      username: '', password: '', modalIsOpen: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.openLogin = this.openLogin.bind(this)
    this.closeLogin = this.closeLogin.bind(this)
  }

  closeLogin(){
    console.log('modal closed')
    this.setState({modalIsOpen: false})
  }
  openLogin(e){
    e.preventDefault();
    console.log('clicked login')
    this.setState({modalIsOpen: true})

  }
  handleSubmit(e){
    console.log("handling login submit")
    e.preventDefault();
    let username = this.state.username;
    let password = this.state.password;
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
      this.setState({modalIsOpen: false})
      browserHistory.push('/profile');

    }, err => {
      console.log("we hit an error")
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
        <p onClick={this.openLogin}>LOGIN</p>
        <Modal
          isOpen={this.state.modalIsOpen}
        >
          <h3 class="text-center">Login</h3>
                <form class="form-horizontal" onSubmit={ this.handleSubmit }>
                  <input
                      onChange={this.handleUsernameChange}
                      type="text"
                      name="username"
                      placeholder="username"
                      required
                  />
                  <input
                      onChange={this.handlePasswordChange}
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
          <button className="btn btn-danger" onClick={this.closeLogin}> Cancel</button>
        </Modal>
      </div>
    )
  }
}

export default Login