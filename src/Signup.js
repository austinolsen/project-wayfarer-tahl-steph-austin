import React, {Component} from 'react'
import Modal from 'react-modal'
import {browserHistory} from 'react-router';
import $ from 'jquery-ajax';

class Signup extends Component{
  constructor(props){
    super(props)
    this.state={
      username: '', password: '', modalIsOpen: false
    }
    this.handleSignupSubmit=this.handleSignupSubmit.bind(this)
    this.openSignup=this.openSignup.bind(this)
    this.closeSignup=this.closeSignup.bind(this)
    this.handleUsernameChange=this.handleUsernameChange.bind(this)
    this.handlePasswordChange=this.handlePasswordChange.bind(this)
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
  handleSignupSubmit(e){
    console.log("handling signup submit")
    e.preventDefault();
    this.props.signup(this.state.username, this.state.password, e)
    this.setState({modalIsOpen: false})
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
          <h3 className="text-center">Signup</h3>
          <form className="form-horizontal" onSubmit={ this.handleSubmit }>
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
          <button className="btn btn-danger" onClick={this.closeSignup}> Cancel</button>

        </Modal>
      </div>
    )
  }
}

export default Signup