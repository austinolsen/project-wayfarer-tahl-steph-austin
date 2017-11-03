import React, {Component} from 'react'
import './Cities.css'
import PostList from './PostList'

class Cities extends Component {
  constructor(props) {
    super(props);
    this.state ={
      citiesArray : [
          {
          name: "San Francisco",
          img: "img/San Francisco.jpg",
          description: "SF description"
        }, {
          name: "New York",
          img: "img/New York.jpeg",
          description: "New York description"
        }, {
          name: "Vancouver",
          img: "img/Vancouver.jpg",
          description: "Vancouver description"
        }
      ]
  }
  console.log(this.state.citiesArray[0].name);
  }

  render() {
    return (
      <div>
        <br/>
        <div id="cityPage">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-5">
                <h2>Cities</h2>
                <br></br>
                <div id="cityTarget">
                  <div className="btn-group">

                    <div className="city">
                      <div className="row">
                        <div className="col-md-12">
                          <a type="button">
                            <img src={this.state.citiesArray[0].img} className="cityListImg" alt="SF" width="200" height="100"/>
                           {this.state.citiesArray[0].name}
                          </a>
                        </div>
                      </div>
                    </div>
                    <br></br>

                    <div className="city">
                      <div className="row">
                        <div className="col-md-12">
                          <a type="button">
                            <img src="img/New York.jpeg" className="cityListImg" alt="New York" width="200" height="100"/>
                            New York
                          </a>
                        </div>
                      </div>
                    </div>
                    <br></br>

                    <div className="city">
                      <div className="row">
                        <div className="col-md-12">
                          <a type="button">
                            <img src="img/Vancouver.jpg" className="cityListImg" alt="Vancouver" width="200" height="100"/>
                            Vancouver
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br></br>
              </div>
              <div className="col-sm-6">
                <div className="row">
                  <div id="selectedCity">

                  <h2>San Francisco</h2>
                  <div className="media">
                    <div className="media-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="media-right">
                      <img src="img/San Francisco.jpg" id="seclectedCityImg" className="media-object" alt="San Francisco" width="270" height="135"></img>
                    </div>
                  </div>
                </div>

                  <h2>City Posts</h2>

                  <PostList />

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Cities
