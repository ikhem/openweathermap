import React, { Component } from 'react';
import Inputs from './Inputs';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Clever Title</h1>
        <Inputs />
      </div>
    );
  }
}

export default Header;