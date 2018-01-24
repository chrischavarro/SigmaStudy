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
    function mapStyles(styles) {
      return {
        opacity: styles.opacity,
        transform: `scale(${styles.scale})`,
      };
    }

    // wrap the `spring` helper to use a bouncy config
    function bounce(val) {
      return spring(val, {
        stiffness: 330,
        damping: 22,
      });
    }

    // child matches will...
    const bounceTransition = {
      // start in a transparent, upscaled state
      atEnter: {
        opacity: 0,
        scale: 1.2,
      },
      // leave in a transparent, downscaled state
      atLeave: {
        opacity: bounce(0),
        scale: bounce(0.8),
      },
      // and rest at an opaque, normally-scaled state
      atActive: {
        opacity: bounce(1),
        scale: bounce(1),
      },
    };
    return (
      <div className="row appRow">
        <BrowserRouter>
          <div>
            <Navbar />
            <AnimatedSwitch
              atEnter={{ offset: -100 }}
              atLeave={{ offset: 100 }}
              atActive={{ offset: 0 }}
              mapStyles={(styles) => ({
                transform: `translateX(${styles.offset}%)`,
              })}
            >
              <Route exact path="/" component={About} />
              <Route exact path="/testimonials" component={Testimonials}/>
              <Route exact path="/videos" component={FreeVideos}/>
              <Route exact path="/schedule" component={Schedule}/>
              <Route exact path="/contact" component={Contact}/>
            </AnimatedSwitch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
