import React, { Component } from 'react';
import Inputs from './Inputs';

class Main extends Component {
  constructor(props){
    super(props)

    this.state = {
      location: 'Fresno, California'
    }

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    console.log(e.target.value);
    let location = e.target.value;
    this.setState({location : location})
  }
  render() {
    let location = this.state.location;
    console.log(this.props.match);
    let match = this.props.match;
    return (
      <div className="landing">
        <h1>Enter a City and State</h1>
        <Inputs 
          match={match}
          location={location}
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Main;