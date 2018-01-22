import React, { Component } from 'react';
import FirstTestimonial from './Testimonials/FirstTestimonial';
import SecondTestimonial from './Testimonials/SecondTestimonial';
import ThirdTestimonial from './Testimonials/ThirdTestimonial';
import FourthTestimonial from './Testimonials/FourthTestimonial';

class Testimonials extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testimonial: 'first'
    };
    this.switchTestimonials = this.switchTestimonials.bind(this)
  }

  switchTestimonials(val) {
    this.setState({ testimonial: val})
  }

  renderTestimonials() {
    const { testimonial } = this.state
    if (testimonial === 'first') {
      return (
        <FirstTestimonial switchTestimonials={this.switchTestimonials} />
      )
    } else if (testimonial === 'second') {
      return (
        <SecondTestimonial switchTestimonials={this.switchTestimonials} />
      )
    } else if (testimonial === 'third') {
      return (
        <ThirdTestimonial switchTestimonials={this.switchTestimonials} />
      )
    } else if (testimonial === 'fourth') {
      return (
        <FourthTestimonial switchTestimonials={this.switchTestimonials} />
      )
    }
  }

  render() {
    // Implement two buttons, general chem and orgo, each one executes a function to swap out the text, fading in and out of DOM
    return (
      <div className="col s10 fullPage orangeBg">
        <div className=" col s10 offset-s1">
          <div className="col s12 testimonialDiv">
              {this.renderTestimonials()}
          </div>
        </div>
      </div>
    )
  }
}

export default Testimonials;
