import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from './components/Main';
import Header from './components/Header';
import Forcast from './components/Forcast';
import Details from './components/Details';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Header />

        <Switch>
          <Route exact path='/' component={Main} />
          <Route path='/forcast' component={Forcast} />
          <Route path='/details' component={Details} />
          <Route render={()=>{return <p>Not Found</p>}} />
        </Switch>
      </div>
    );
  }
}

export default App;