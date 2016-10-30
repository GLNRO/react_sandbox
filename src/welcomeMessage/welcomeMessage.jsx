import React, { Component, PropTypes } from 'react';


class WelcomeMessage extends Component {

  constructor(props){
    super(props);
  }

  componentWillMount(){
  }

  render(){


    return(
      <div>
        <h1 id="welcome">Welcome! {name} </h1>
      </div>
    )
  }
}

export default WelcomeMessage
