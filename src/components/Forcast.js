import React, { Component } from 'react';
import api from '../utils/api';

class Forcast extends Component {
  componentWillMount(){
    api.getFiveDayForcast('Fresno,California')
       .then(response=>{
          console.log(response);
       });
  }
  render() {
    return (
      <div>
        Forcast
      </div>
    );
  }
}

export default Forcast;