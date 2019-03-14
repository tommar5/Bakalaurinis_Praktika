import React, { Component } from 'react';

import NavigationBar from './components/Layout/Navbar/Navbar';
import FooterBar from './components/Layout/Footer/Footer';
import Home from './pages/Home/Home'

import logo from '../logo.svg';

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
