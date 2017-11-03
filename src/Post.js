import React, {Component} from 'react'

class Post extends Component {
  render() {
    return (
      <div>
        <div id="postList">
          <div className="row">
            <div className="col-sm-12">
              <div className="media">
                <div className="media-left">
                  <img id="postList" src="img/ladybug.png" className="media-object" alt="San Francisco" width="120" height="110"></img>
                </div>
                <div className="media-body">

                  <h5>Title: This is the title of the post.</h5>
                  <h2>
                    <i>Steph
                      <small>
                        - Posted on October 28, 2017</small>
                    </i>
                  </h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <div className="text-center">
                    <a data-toggle="collapse" data-target="#test1">
                      <span className="glyphicon glyphicon-chevron-down"></span>
                    </a>
                  </div>
                  <div id="test1" className="collapse in">
                    <div className="media">
                      <div className="media-left">
                        <img src="img/f-flower-1.jpg" className="media-object" alt="San Francisco" width="90" height="80"></img>
                      </div>
                      <div className="media-body">
                        <h2>
                          <i>Tahl
                            <small>
                              - Posted on October 28, 2017</small>
                          </i>
                        </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <form>
                    <div className="form-group">
                      <label for="comment">Comment:</label>
                      <textarea className="form-control" rows="2" id="comment"></textarea>
                    </div>
                    <input type="button" className="btn" value="Submit"></input>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    )
  }
}

export default Post
