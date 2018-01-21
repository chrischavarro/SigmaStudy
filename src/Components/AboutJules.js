import React, { Component } from 'react';

class AboutJules extends Component {
  render() {
    return (
      <div className="col s10 fullPage greenBg">
        <div className="tutorHeading col s10 offset-s1">
          Chemistry With Jules
          <div className="tutorDescription">
          {`With degrees from Duke and FIU, he's spent over 10 years making Chemistry dead-simple for students.`}
            </div>
        </div>
        <div>
          <div className="col s11 offset-s1">
            <div className="tutorCourses col s3">
              <div style={{ marginTop: '70px' }}>
                Organic Chemistry 1 <br/>
                <span className="topicsCovered">Topics Covered</span>
              </div>
              <div style={{ marginTop: '155px', paddingBottom: '109px' }}>
                Organic Chemistry 2 <br/>
                <span className="topicsCovered">Topics Covered</span>
              </div>
            </div>
            <div className="conceptsCovered col s8">
              <ul className="courseTopics col s5">
                <li>Bondline</li>
                <li>Acids and Bases</li>
                <li>Functional Groups</li>
                <li>Intermolecular Forces</li>
                <li>Molecular Representations</li>
              </ul>
              <ul className="courseTopics col s5">
                <li>Pi-Bonds and their Reactions</li>
                <li>Radical Mechanisms</li>
                <li>Alcohols and Epoxides</li>
                <li>Oxidation and Reduction</li>
                <li>Nucleophiles and Electrophiles</li>
              </ul>
              <div className="col s10 offset-s1" style={{ border: '1px solid rgba(255, 255, 255, 0.5)' }}>
              </div>
              <ul className="courseTopics col s5">
                <li>Dies-Alder</li>
                <li>Sugar Chemistry</li>
                <li>Aromatic Compounds</li>
                <li>Molecular Orbital Theory</li>
              </ul>
              <ul className="courseTopics col s5" style={{ marginBottom: '30px' }}>
                <li>Reactions of Amines</li>
                <li>Addition and Substitution Reactions of Carbonyls</li>
                <li>Enolates, Tautomerization, and Condensation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutJules;
