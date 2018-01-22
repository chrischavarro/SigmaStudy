import React, { Component } from 'react';

class SecondTestimonial extends Component {
  constructor(props) {
    super(props)
  }

  componentWillUnmount() {
    console.log('Unmounting component')
  }

  switchTestimonials(val) {
    this.props.switchTestimonials(val)
  }

  render() {
    return (
      <div>
        <div className="">
          <div className="col s12 testimonialCopy">
            {`"Jonathan was a lifesaver when it came to preparing me for my organic 2 final.
            He not only explained the concepts really well but went over problems and made sure everyone understood.
            He really cares about his students doing well and goes above and beyond to help them succeed.
            I wish I had learned of his tutoring services earlier and started classes with him earlier in the semester.
            I totally recommend his classes to any organic chemistry student. Thanks for everything Jonathan!"`}
          </div>

        </div>
        <div className="col s12 testimonialName">
          <span>Beatriz, University of Miami</span>
          <div className="testimonialButtons">
            <i className="material-icons" onClick={() => this.switchTestimonials('first')}>radio_button_unchecked</i>
            <i className="material-icons">radio_button_checked</i>
            <i className="material-icons" onClick={() => this.switchTestimonials('third')}>radio_button_unchecked</i>
            <i className="material-icons" onClick={() => this.switchTestimonials('fourth')}>radio_button_unchecked</i>
          </div>
        </div>
      </div>
    )
  }
}

export default SecondTestimonial;
