import React, { Component } from 'react';

class FourthTestimonial extends Component {
  constructor(props) {
    super(props)
  }

  switchTestimonials(val) {
    this.props.switchTestimonials(val)
  }

  render() {
    return (
      <div>
        <div className="">
          <div className="col s12 testimonialCopy">
            {`"Jonathan is a lifesaver when it's comes to Chemistry! I was really struggling in Organic Chemistry II when Jonathan was referred to me by a friend of mine.
            I've had tutors before but none like him, he is incredibly friendly and able to explain difficult concepts in such an easy and understandable way that it will
            make you wonder why your professor couldn't have explained it that simply in the first place. He is extremely knowledgeable of the material but also knows what
            professors look for and how to get you fully prepared to ace the exams!"`}
          </div>

        </div>
        <div className="col s12 testimonialName">
          <span>Ali, University of Miami</span>
          <div className="testimonialButtons">
            <i className="material-icons" onClick={() => this.switchTestimonials('first')}>radio_button_unchecked</i>
            <i className="material-icons" onClick={() => this.switchTestimonials('second')}>radio_button_unchecked</i>
            <i className="material-icons" onClick={() => this.switchTestimonials('third')}>radio_button_unchecked</i>
            <i className="material-icons">radio_button_checked</i>
          </div>
        </div>
      </div>
    )
  }
}

export default FourthTestimonial;
