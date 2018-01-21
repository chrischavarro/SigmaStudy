import React, { Component } from 'react';
import { AnimatedRoute, AnimatedSwitch, spring } from 'react-router-transition';
import { BrowserRouter, Route } from 'react-router-dom'
import AboutJules from './Components/AboutJules';
import Navbar from './Components/Navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="row appRow">
        <BrowserRouter>
          <div>
            <Navbar />
            <AboutJules />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
