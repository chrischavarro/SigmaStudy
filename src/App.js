import React, { Component } from 'react';
import { AnimatedRoute, AnimatedSwitch, spring } from 'react-router-transition';
import { BrowserRouter, Route } from 'react-router-dom'
import About from './Components/About';
import Navbar from './Components/Navbar';
import Testimonials from './Components/Testimonials';
import FreeVideos from './Components/FreeVideos';
import Schedule from './Components/Schedule';
import Contact from './Components/Contact';
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
            <Route exact path="/videos" component={FreeVideos}/>
            <Route exact path="/schedule" component={Schedule}/>
            <Route exact path="/contact" component={Contact}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
