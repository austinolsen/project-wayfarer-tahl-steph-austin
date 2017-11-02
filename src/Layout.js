import React, { Component } from 'react';
import Footer from './Footer'
import Header from './Header'
import Home from './Home'

class Layout extends Component {
  constructor(props){
    super(props)
    this.state={
      id:'', isAuthenticated: false, path: this.props.location.pathname
    };
  }

    render() {
      if(this.state.path === '/'){
        return (
          <div>
              <Header
                isAuthed={this.state.isAuthenticated}
              />
              <Home/>
                {this.props.children}
              <Footer />
          </div>
        )
      } else {
        return (
          <div>
              <Header
                isAuthed={this.state.isAuthenticated}
              />
                {this.props.children}
              <Footer />
          </div>
        );
      }
    }
  }

export default Layout;
