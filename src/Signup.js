import React, {Component} from 'react'
import Modal from 'react-modal'
import {browserHistory} from 'react-router';
import $ from 'jquery-ajax';

class Signup extends Component{
  constructor(){
    super()
    this.state={
      modalIsOpen: false
    }
    this.handleSubmit=this.handleSubmit.bind(this)
    this.openSignup=this.openSignup.bind(this)
    this.closeSignup=this.closeSignup.bind(this)
  }

  closeSignup(){
    console.log('modal closed')
    this.setState({modalIsOpen: false})
  }
  openSignup(e){
    e.preventDefault();
    console.log('clickedSignup')
    this.setState({modalIsOpen: true})
  }
  handleSubmit(e){
    console.log("handling signup submit")
    e.preventDefault();
    let username = this.state.username;
    let password = this.state.password;
    console.log(username)
    console.log(password)
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
      <p onClick={this.openSignup}>SIGNUP</p>
      <Modal
        isOpen={this.state.modalIsOpen}
      >
          <h3 class="text-center">Signup</h3>
          <form className="form-horizontal" onSubmit={ this.handleSubmit }>
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
            <input
              id="signupBtn"
              type="submit"
              value="Submit"
            />
          </form>
          <button className="btn btn-danger" onClick={this.closeSignup}> Cancel</button>

        </Modal>
      </div>
    )
  }
}

export default Signup