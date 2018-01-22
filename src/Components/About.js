import React, { Component } from 'react';
import JulesInfo from './Tutors/JulesInfo';
import JonathanInfo from './Tutors/JonathanInfo';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tutor: 'jules'
    };
  }

  renderTutorInfo() {
    if (this.state.tutor === 'jules') {
      return (
        <JulesInfo />
      )
    } else if (this.state.tutor === 'jonathan') {
      return (
        <JonathanInfo />
      )
    }
  }
  render() {
    // console.log(this.state.tutor)
    // Implement two buttons, general chem and orgo, each one executes a function to swap out the text, fading in and out of DOM
    return (
      <div className="col s10 fullPage greenBg">
        <div className="tutorHeading col s10 offset-s1">
          <div className={`col s6 chemWithJules ${this.state.tutor}`} onClick={() => this.setState({ tutor: 'jules' })}>Chemistry With Jules</div>
          <div className={`col s6 orgoWithJohn ${this.state.tutor}`} onClick={() => this.setState({ tutor: 'jonathan' })}>Organic With Jonathan</div>

        </div>
        <div>
          {this.renderTutorInfo()}
        </div>
      </div>
    )
  }
}

export default About;
