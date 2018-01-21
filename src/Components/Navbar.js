import React, { Component } from 'react';
import Logo from '../Images/logo.png';

class Navbar extends Component {
  render() {
    return (
      <div className="">
        <div className="col s2 navbar">
          <div className="logoDiv">
            <img src={Logo} className="logoImage" />
          </div>
          <div className="">
            <ul className="navLinks">
              <li>About Us</li>
              <li>Testimonials</li>
              <li>Free Videos</li>
              <li>Schedule</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Navbar;
