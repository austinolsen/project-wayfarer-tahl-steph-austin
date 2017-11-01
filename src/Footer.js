import React, {Component} from 'react'

class Footer extends Component{
  render(){
    return(
      <div>
        <footer class="text-center">
          <a class="up-arrow" href="#myPage" data-toggle="tooltip" title="TO TOP">
        <span class="glyphicon glyphicon-chevron-up"></span>
        </a>
          <p id="appName">Wayfarer</p>
          <p id="createdBy">Created by Stephanie, Austin and Tahl</p>
        </footer>
      </div>

    )
  }
}




export default Footer