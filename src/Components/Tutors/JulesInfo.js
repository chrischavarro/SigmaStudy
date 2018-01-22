import React, { Component } from 'react';

function JulesInfo() {
  return (
    <div className="col s11 offset-s1 tutorDiv">
      <div className="tutorCourses col s3">
        <div>
          <br/><br/>
          General Chemistry 1 <br/>
          <span className="topicsCovered">Topics Covered</span><br/><br/><br/>
        </div>
        <div style={{ paddingBottom: '18px' }}>
        <br/>
          General Chemistry 2 <br/>
          <span className="topicsCovered">Topics Covered</span><br/><br/><br/>
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
  )
}

export default JulesInfo;

// <Particles style={{ position: 'absolute' }}
// params={{
//   particles: {
//     number: {
//       value: 100
//     },
//     opacity: {
//       value: 0.5
//     },
//     line_linked: {
//       shadow: {
//         enable: true,
//         color: "#3CA9D1",
//         distance: 300,
//         blur: 5
//       }
//     }
//   },
//   interactivity: {
//     events: {
//       onhover: {
//         enable: true,
//         mode: "repulse"
//       }
//     }
//   }
// }}
// />
