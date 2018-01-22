import React, { Component } from 'react';
import { AnimatedRoute, AnimatedSwitch, spring } from 'react-router-transition';
import { BrowserRouter, Route } from 'react-router-dom'
import About from './Components/About';
import Navbar from './Components/Navbar';
import Testimonials from './Components/Testimonials';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="row appRow">
        <BrowserRouter>
          <div>
            <Navbar />
            <Route exact path="/" component={About} />
            <Route exact path="/testimonials" component={Testimonials}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
