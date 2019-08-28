import React, { Component } from 'react';

import ListView from './views/ListView';
import FormView from './views/FormView';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <ListView />
        <FormView />
      </div>
    );
  }
}

export default App;
