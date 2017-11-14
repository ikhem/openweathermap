import React from 'react';
import {Link} from 'react-router-dom';

const Inputs = (props) => {
  return (
    <div className='inputs'>
      <input 
        placeholder='Fresno, California' 
        type='text'
        autoComplete='off'
        value={props.location}
        onChange={(e)=>props.handleChange(e)}
      />
      <Link 
        className='button'
        to={{
          pathname: '/forcast',
          search: `?${props.location}`
        }}
      >
        Get Weather
      </Link>

    </div>
  );
};

export default Inputs;