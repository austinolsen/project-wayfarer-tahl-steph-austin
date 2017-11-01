import React, {Component} from 'react'
import {Link} from 'react-router'

class Header extends Component{
  render(){
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
                <li><Link to={'/signup'}>SIGN UP</Link></li>
                <li><Link to={'/login'}>LOG IN</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
export default Header