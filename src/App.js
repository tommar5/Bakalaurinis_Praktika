import React, { Component } from 'react';

import NavigationBar from './components/Layout/Navbar';
import FooterBar from './components/Layout/Footer';

import logo from './logo.svg';
import './App.css';
import './components/Layout/Icons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <FooterBar />
      </div>
    );
  }
}

export default App;
