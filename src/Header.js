import React, {Component} from 'react'
import {Link} from 'react-router'
import Login from './Login'
import Signup from './Signup'

class Header extends Component{
  render(){
    console.log("IS AUTHED in header:", this.props.isAuthed)
    if(this.props.isAuthed===false){
    return(
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" ><img alt="avatar" src="img/ladybug.png" height="28"/></a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav navbar-right">
                <li className="navControl"><Signup signup={this.props.signup}/></li>
                <li className="navControl"><Login login={this.props.login}/></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  } else {
    return(
      <div>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#myPage"><img alt="avatar" src="img/ladybug.png" height="28"/></a>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav navbar-right">
                <li onClick={this.props.cities}>CITIES</li>
                <li onClick={this.props.myProfile}>MY PROFILE</li>
                <li onClick={this.props.logout}>LOGOUT</li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
  }
}
export default Header
