import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="col s10 fullPage greenBg">
        <div className="col s10 offset-s1">
          <div className="col s5 contactDiv">
            Phone
            <div className="contactDetails">
              <div style={{ padding: '0px 40px'}}>{"Call or text and ask for Jules or Jonathan"}</div>
              <div className="contactInfo">(786) 558-3749</div>
            </div>
          </div>
          <div className="col s5 offset-s2 contactDiv">
            Email <br />
            <div className="contactDetails">
              <div style={{ padding: '0px 20px'}}>{"Include 'Sigma Study' and your class in subject line"}</div>
              <div className="contactInfo">{"sigmastudy@gmail.com"}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact;
