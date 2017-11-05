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
  }

  render() {
    return (
      <div>
        <br/>
        <div id="cityPage">
          <div className="container-fluid">
            <div className="row">

              <div className="col-sm-5 cityRow">
              <h2>Cities</h2>
                <br></br>
                <div id="cityTarget">
                  <div className="btn-group">

                    <div className="city">
                      <div className="row">
                        <div className="col-md-12">
<<<<<<< 4124827113f5ca7ee665bc9541daefad5caa4ecc
                          <a type="button" name="sfClick">
                            <img src={this.state.citiesArray[0].img} className="cityListImg" alt="SF" width="200" height="100"/>
                           {this.state.citiesArray[0].name}
=======
                          <a type="button">
                            <img src="img/San Francisco.jpg" className="cityListImg" alt="San Francisco" width="100" height="50"/>
                            San Francisco
>>>>>>> update cities bootstrap
                          </a>
                        </div>
                      </div>
                    </div>
                    <br></br>

                    <div className="city">
                      <div className="row">
                        <div className="col-md-12">
<<<<<<< 4124827113f5ca7ee665bc9541daefad5caa4ecc
                          <a type="button" name="nyClick">
                            <img src="img/New York.jpeg" className="cityListImg" alt="New York" width="200" height="100"/>
=======
                          <a type="button">
                            <img src="img/New York.jpeg" className="cityListImg" alt="New York" width="100" height="50"/>
>>>>>>> update cities bootstrap
                            New York
                          </a>
                        </div>
                      </div>
                    </div>
                    <br></br>

                    <div className="city">
                      <div className="row">
                        <div className="col-md-12">
<<<<<<< 4124827113f5ca7ee665bc9541daefad5caa4ecc
                          <a type="button" name="vcClick">
                            <img src="img/Vancouver.jpg" className="cityListImg" alt="Vancouver" width="200" height="100"/>
=======
                          <a type="button">
                            <img src="img/Vancouver.jpg" className="cityListImg" alt="Vancouver" width="100" height="50"/>
>>>>>>> update cities bootstrap
                            Vancouver
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br></br>
              </div>
              <div className="col-sm-7">
                <div className="row">
                  <div id="selectedCity">

                  <h2>{this.state.citiesArray[0].name}</h2>
                  <div className="media">
                    <div className="media-body">
                      <p>{this.state.citiesArray[0].description}</p>
                    </div>
                    <div className="media-right">
                      <img src={this.state.citiesArray[0].img} id="seclectedCityImg" className="media-object" alt="Selected City" width="270" height="135"></img>
                    </div>
                  </div>
                </div>

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
