import React, { Component } from 'react';
//import {browserHistory} from 'react-router';

class Home extends Component {
  constructor(props){
    super(props)
    console.log(this.props.location)
  }
    render() {
      return (
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner" role="listbox">
            <div className="item active">
                <img src='img/San Francisco.jpg' alt="San Francisco" width="1200" height="600"/>
                <div className="carousel-caption">
                  <h3>San Francisco</h3>
                  <p className="titleMessage"> The atmosphere in San Francisco is lorum ipsum</p>
                </div>
            </div>
            <div className="item">
              <img src="img/New York.jpeg" alt="New York" width="1200" height="600"/>
              <div className="carousel-caption">
                <h3>New York</h3>
                <p className="titleMessage"> Thank you, New York! An inspiring night out</p>
              </div>
            </div>
            <div className="item">
              <img src="img/Vancouver.jpg" alt="Vancouver" width="1200" height="600"/>
              <div className="carousel-caption">
                <h3>Vancouver</h3>
                <p className="titleMessage">We had the best time playing at Vancouver</p>
              </div>
            </div>
          </div>
          <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
          <div id="Inspo"className="container text-center">
            <h3>Wayfarer is...</h3>
            <div className="row">
              <div className="col-sm-4">
                <p className="text-center"><strong>Inspiration</strong></p>
                <p>Put an image here</p>
              </div>
              <div className="col-sm-4">
                <p className="text-center"><strong>Knowledge</strong></p>
                <p>Put an image here</p>
              </div>
              <div className="col-sm-4">
                <p className="text-center"><strong>Community</strong></p>
                <p>Put an image here</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
export default Home;
