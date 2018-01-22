import React, { Component } from 'react';

class FirstTestimonial extends Component {
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
            {`"Jonathan is a fun tutor with extensive knowledge in organic chemistry.
            I enjoyed our private sessions because I felt he understood my questions.
            He was able to explain concepts to me in manner that was easy to grasp.
            I would highly recommend him to any student enrolled in a chemistry course."`}
          </div>

        </div>
        <div className="col s12 testimonialName">
          <span>Katrianna, Rutgers University</span>
          <div className="testimonialButtons">
            <i className="material-icons">radio_button_checked</i>
            <i className="material-icons" onClick={() => this.switchTestimonials('second')}>radio_button_unchecked</i>
            <i className="material-icons" onClick={() => this.switchTestimonials('third')}>radio_button_unchecked</i>
            <i className="material-icons" onClick={() => this.switchTestimonials('fourth')}>radio_button_unchecked</i>
          </div>
        </div>
      </div>
    )
  }
}

export default FirstTestimonial;
