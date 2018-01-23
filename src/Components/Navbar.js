import React, { Component } from 'react';
import Logo from '../Images/logo.png';
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <div className="">
        <div className="col s2 navbar">
          <div className="logoDiv">
            <img src={Logo} className="logoImage" />
          </div>
          <div>
            <ul className="navLinks">
              <Link to="/"><li className="navLink">About Us</li></Link>
              <Link to="/testimonials"><li className="navLink">Testimonials</li></Link>
              <Link to="/videos"><li className="navLink">Free Videos</li></Link>
              <Link to="/schedule"><li className="navLink">Schedule</li></Link>
              <Link to="/contact"><li className="navLink">Contact</li></Link>
            </ul>
          </div>
        </div>
        <div className="mobileNavbar">
          <ul className="navLinks">
            <li style={{ fontWeight: '400', color: 'rgb(0,117,70)' }}>Sigma Study</li>
            <Link to="/"><li className="navLink">About Us</li></Link>
            <Link to="/testimonials"><li className="navLink">Testimonials</li></Link>
            <Link to="/videos"><li className="navLink">Free Videos</li></Link>
            <Link to="/schedule"><li className="navLink">Schedule</li></Link>
            <Link to="/contact"><li className="navLink">Contact</li></Link>
          </ul>
        </div>
      </div>
    )
  }
}

export default Navbar;
