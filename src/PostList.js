import React, {Component} from 'react'
import Post from './Post'

class PostList extends Component {
  render() {
    return (
      <div>
        <h1>Here is our Post List page</h1>
        <Post />
      </div>
    )
  }
}

export default PostList
