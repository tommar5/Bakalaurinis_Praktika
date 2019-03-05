import React, { Component } from 'react';

import NavigationBar from './components/Layout/Navbar';
import FooterBar from './components/Layout/Footer';
import Home from './pages/Home/Home'

import logo from '../logo.svg';
import './components/Layout/Icons';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar/>
        
        <Home />

        <FooterBar />
      </div>
    );
  }
}

export default App;
