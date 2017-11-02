import React, {Component} from 'react'
import {Link} from 'react-router'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'

class Header extends Component{
  constructor(props){
    super(props)
  }
  render(){
    if(this.props.isAuthed===false){
    return(
      <div>
        <nav class="navbar navbar-default navbar-fixed-top">
          <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#myPage"><img src="img/ladybug.png" height="28"/></a>
              <p id="brandInitials">WF</p>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
              <ul class="nav navbar-nav navbar-right">
                <li><Signup/></li>
                <li><Login/></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  } else {
    return(
      <div>
        <nav class="navbar navbar-default navbar-fixed-top">
          <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#myPage"><img src="img/ladybug.png" height="28"/></a>
              <p id="brandInitials">WF</p>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
              <ul class="nav navbar-nav navbar-right">
                <li><Link to={'/profile'}>My Profile</Link></li>
                <li><Link to={'/logout'}>LOGOUT</Link></li>
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