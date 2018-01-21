import React, { Component } from 'react';

class AboutJonathan extends Component {
  render() {
    return (
      <div className="col s10 fullPage greenBg">
        <div className="tutorHeading">
          Organic With Jonathan
        </div>
        <div>
          <div className="aboutTutor">
            About Jonathan
          </div>
          <div className="aboutTutorDescription">
            {`Jonathan's made mastering Orgo his full-time job, so you're in good hands. He'll teach you in an hour what your professor covers in a week.`}
          </div>
          <div className="conceptsCovered">
            Concepts Covered
            Organic Chemistry 1
            <ul>
              <li>Bondline</li>
              <li>Acids and Bases</li>
              <li>Functional Groups</li>
              <li>Intermolecular Forces</li>
              <li>Molecular Representations</li>
              <li>IUPAC Nomenclature</li>
            </ul>
            <ul>
              <li>Pi-Bonds and their Reactions</li>
              <li>Radical Mechanisms</li>
              <li>Alcohols and Epoxides</li>
              <li>Oxidation and Reduction</li>
              <li>Nucleophiles and Electrophiles</li>
            </ul>
            Organic Chemistry 2
            <ul>
              <li>Dies-Alder</li>
              <li>Sugar Chemistry</li>
              <li>Aromatic Compounds</li>
              <li>Molecular Orbital Theory</li>
            </ul>
            <ul>
              <li>Reactions of Amines</li>
              <li>Addition and Substitution Reactions of Carbonyls</li>
              <li>Enolates, Tautomerization, and Condensation</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutJonathan;
