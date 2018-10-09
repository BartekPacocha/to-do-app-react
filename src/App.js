import React, { Component } from 'react';
import './App.css';
import AddTask from './components/AddTask/AddTask';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <AddTask />
        </header>
      </div>
    );
  }
}

export default App;
