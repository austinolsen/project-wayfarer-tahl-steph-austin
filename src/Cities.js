import React, {Component} from 'react'
import './Cities.css'

class Cities extends Component {
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
                            <img src="img/San Francisco.jpg" className="cityListImg" alt="San Francisco" width="200" height="100"/>
                            San Francisco
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
