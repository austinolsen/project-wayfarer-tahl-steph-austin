import React, { Component } from 'react';
import {browserHistory} from 'react-router';

class Home extends Component {
  constructor(props){
    super(props)
    console.log(this.props.location)
  }
    render() {
      return (
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <div class="carousel-inner" role="listbox">
            <div class="item active">
                <img src='img/San Francisco.jpg' alt="San Francisco" width="1200" height="600"/>
                <div class="carousel-caption">
                  <h3>San Francisco</h3>
                  <p class="titleMessage"> The atmosphere in San Francisco is lorum ipsum</p>
                </div>
            </div>
            <div class="item">
              <img src="img/New York.jpeg" alt="New York" width="1200" height="600"/>
              <div class="carousel-caption">
                <h3>New York</h3>
                <p class="titleMessage"> Thank you, New York! An inspiring night out</p>
              </div>
            </div>
            <div class="item">
              <img src="img/Vancouver.jpg" alt="Vancouver" width="1200" height="600"/>
              <div class="carousel-caption">
                <h3>Vancouver</h3>
                <p class="titleMessage">We had the best time playing at Vancouver</p>
              </div>
            </div>
          </div>
          <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
          <div id="Inspo"class="container text-center">
            <h3>Wayfarer is...</h3>
            <div class="row">
              <div class="col-sm-4">
                <p class="text-center"><strong>Inspiration</strong></p>
                <p>Put an image here</p>
              </div>
              <div class="col-sm-4">
                <p class="text-center"><strong>Knowledge</strong></p>
                <p>Put an image here</p>
              </div>
              <div class="col-sm-4">
                <p class="text-center"><strong>Community</strong></p>
                <p>Put an image here</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
export default Home;
