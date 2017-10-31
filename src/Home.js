import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="homePage">
        <nav class="navbar navbar-default navbar-fixed-top">
          <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#myPage"><img src="img/ladybug.png" alt="ladybug-logo" height="28"/>WF</a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
              <ul class="nav navbar-nav navbar-right">
                <li><a href="#tour">SIGN UP</a></li>
                <li><a href="#contact">LOG IN</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Home;
