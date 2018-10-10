import React, { Component } from 'react';
import './App.css';
import MainForm from './components/MainForm/MainForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MainForm />
        </header>
      </div>
    );
  }
}

export default App;
