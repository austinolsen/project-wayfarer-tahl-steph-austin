import React, {Component} from 'react'
import Modal from 'react-modal'

class Login extends Component{
  constructor(props) {
    super(props);
    this.state = {
      username: '', password: '', modalIsOpen: false
    };
    this.openLogin=this.openLogin.bind(this)
    this.closeLogin=this.closeLogin.bind(this)
    this.handleUsernameChange=this.handleUsernameChange.bind(this)
    this.handlePasswordChange=this.handlePasswordChange.bind(this)
    this.handleLoginSubmit=this.handleLoginSubmit.bind(this)

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
  handleUsernameChange(e){
    this.setState({username: e.target.value});
    console.log(this.state.username)
  }
  handlePasswordChange(e){
    this.setState({password: e.target.value});
  }
  handleLoginSubmit(e){
    e.preventDefault();
    console.log("PROPS: ", this.props)
    this.props.login(this.state.username, this.state.password, e)
    this.setState({modalIsOpen: false})
  }
  render(){
    return(
      <div>
        <p onClick={this.openLogin}>LOGIN</p>
        <Modal
          isOpen={this.state.modalIsOpen}
        >
          <h3 className="text-center">Login</h3>
                <form className="form-horizontal" onSubmit={ this.handleLoginSubmit }>
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