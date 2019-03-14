import React, { Component } from 'react';
import Todos from './components/Todos'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="ui container">
          <Todos />
        </div>
      </div>
    );
  }
}

export default App;
