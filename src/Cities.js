import React, {Component} from 'react'
import './Cities.css'
import City from './City';
import sampleCities from './sample-cities';
import PostList from './PostList';

class Cities extends Component {
  constructor(props) {
    super(props);
    this.state ={
      cities: sampleCities
    }
  }

  render() {
    return (
      <div>
        <div id="cityPage">
          <div className="container-fluid">
            <div className="row">

              <div className="col-sm-4 cityRow">
              <h2>Cities</h2>
                  <div className="row">
                    {
                     Object
                       .keys(this.state.cities)
                       .map(key => <City key={key} index={key} details={this.state.cities[key]} />)
                   }
                  </div>
              </div>
              <div className="col-sm-8 cityBlogs">
                <div className="row">
                  <div id="selectedCity">
                  <div className="media">
                    <div className="media-body">
                    </div>
                    <div className="media-right">
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
