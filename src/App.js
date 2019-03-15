import React, { Component } from 'react';
import Todos from './components/Todos'
import ListOfPhotos from './components/ListOfPhotos'


class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Todos />
        <ListOfPhotos />
      </div>
    );
  }
}

export default App;
