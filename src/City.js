import React, { Component } from 'react';


class City extends Component {
  render(){
    const { details, index } = this.props;

    return(
      <div className="col-sm-12">
        <h4>{details.name}</h4>
        <img className="cityimg" src={details.img} width="100%" height="auto"/>
        <p>{details.desc}</p>
      </div>
    )
  }
}

export default City;