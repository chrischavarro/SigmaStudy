import React, { Component } from 'react';

class ThirdTestimonial extends Component {
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
            {`"Without Jonathan I would not have passed my organic chemistry 2 final.
            I don't know how he did it, but he was able to teach me and my friends a whole semester of orgo 2 in less than a week.
            He explained all concepts with the intention to understand, not just memorize.
            With his help, we were able to pass orgo 2!! I wish I would have met him earlier! Thank you so much for everything Jonathan!"`}
          </div>

        </div>
        <div className="col s12 testimonialName">
          <span>Kristen, University of Miami</span>
          <div className="testimonialButtons">
            <i className="material-icons" onClick={() => this.switchTestimonials('first')}>radio_button_unchecked</i>
            <i className="material-icons" onClick={() => this.switchTestimonials('second')}>radio_button_unchecked</i>
            <i className="material-icons">radio_button_checked</i>
            <i className="material-icons" onClick={() => this.switchTestimonials('fourth')}>radio_button_unchecked</i>
          </div>
        </div>
      </div>
    )
  }
}

export default ThirdTestimonial;
