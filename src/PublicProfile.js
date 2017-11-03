import React, {Component} from 'react'

class PublicProfile extends Component{
  render(){
    return(
      <div>
        <div id="profilePage">
          <div className="container">

          <img id="profile-avatar" width="100" alt="profile-img" />
          <h2><span id="profile-name"></span></h2>
          <p>Current City: <span id="profile-city"></span></p>
          <div className="postSummary"></div>

          </div>
        </div>
      </div>

      // {/* <div id="profilePage">
      //   <div className="container">
      //     <img id="profile-avatar" />
      //     <!--         <img src="https://www.proflowers.com/blog/wp-content/uploads/2014/03/tulip-thumbnail-350x240.jpg" width="100"/>
      // -->
      //     <h2><span id="profile-name"></span></h2>
      //     <h3>Current City: <span id="profile-city"></span></h3>
      //     <div classNameName="postSummary"></div>
      //
      //   </div>
      // </div> */}


    )
  }
}

export default PublicProfile
