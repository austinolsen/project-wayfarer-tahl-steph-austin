import React, {Component} from 'react'
import PostList from './PostList'
class PublicProfile extends Component{
  render(){
    return(
        <div id="profilePage" className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <img id="profile-avatar" width="100" alt="profile-img" />
              <h4>Stephanie</h4>
            </div>
            <div className="col-sm-6">
              <p>Current City:</p>
              <p>San Francisco</p>
            </div>
            <div className="postSummary"></div>
          </div>
          <PostList/>
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
