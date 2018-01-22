import React, { Component } from 'react';

class Schedule extends Component {
  render() {
    return (
      <div className="col s10 fullPage orangeBg">
        <iframe src="https://example.acuityscheduling.com" width="100%" height="800" frameBorder="0"></iframe>
        <script src="https://d3gxy7nm8y4yjr.cloudfront.net/js/embed.js" type="text/javascript"></script>
      </div>
    )
  }
}

export default Schedule;
