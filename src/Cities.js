import React, {Component} from 'react'

class Cities extends Component {
  render() {
    return (
      <div>
        <div id="cityPage">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-5">
                <h2>Cities</h2>
                <br></br>
                <div className="cityTarget">

                  <div className="row">
                    <div className="col-md-12">
                      <img src="img/San Francisco.jpg" alt="San Francisco" width="200" height="100"></img>
                        San Franciso
                    </div>
                  </div>
                  <br></br>

                  <div className="row">
                    <div className="col-md-12">
                      <img src="img/New York.jpeg" alt="New York" width="200" height="100"></img>
                        New York
                    </div>
                  </div>
                  <br></br>

                  <div className="row">
                    <div className="col-md-12">
                      <img src="img/Vancouver.jpg" alt="Vancouver" width="200" height="100"></img>
                        Vancouver
                    </div>
                  </div>
                  <br></br>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="row">

                  <h2>San Francisco</h2>
                  <div className="media">
                    <div className="media-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="media-right">
                      <img src="img/San Francisco.jpg" className="media-object" alt="San Francisco" width="270" height="135"></img>
                    </div>
                  </div>

                  <h2>City Posts</h2>

                  <div className="media">
                    <div className="media-left">
                      <img src="img/ladybug.png" className="media-object" alt="San Francisco" width="90" height="80"></img>
                    </div>
                    <div className="media-body">
                      <h5>Steph</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                  </div>

                  <div className="media">
                    <div className="media-left">
                      <img src="img/ladybug.png" className="media-object" alt="San Francisco" width="90" height="80"></img>
                    </div>
                    <div className="media-body">
                      <h5>Steph</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="media-left">
                      <img src="img/ladybug.png" className="media-object" alt="San Francisco" width="90" height="80"></img>
                    </div>
                    <div className="media-body">
                      <h5>Steph</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                  </div>
                  <div className="media">
                    <div className="media-left">
                      <img src="img/ladybug.png" className="media-object" alt="San Francisco" width="90" height="80"></img>
                    </div>
                    <div className="media-body">
                      <h5>Steph</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                  </div>

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
