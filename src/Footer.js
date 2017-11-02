import React, {Component} from 'react'

class Footer extends Component{
  render(){
    return(
      <div>
        <footer className="text-center">
          <a className="up-arrow" href="#myPage" data-toggle="tooltip" title="TO TOP">
        <span className="glyphicon glyphicon-chevron-up"></span>
        </a>
          <p id="appName">Wayfarer</p>
          <p id="createdBy">Created by Stephanie, Austin and Tahl</p>
        </footer>
      </div>

    )
  }
}




export default Footer