import React, { Component } from 'react';

class FreeVideos extends Component {
  constructor(props) {
    super(props)
    this.state = {
      video: 'first',
      videoURL: '//www.youtube.com/embed/zHeLP7y6MS4'
    };
  }

  render() {
    return (
      <div className="col s10 fullPage greenBg">
        <div className="col s10 offset-s1">
          <div className="video-container">
            <iframe width="853" height="480" src={`${this.state.videoURL}`} frameBorder="0" allowFullScreen></iframe>
          </div>
          <div className="videoTopics col s12">
            <div className={`col s4 videoTopic vid1 ${this.state.video}`}
              onClick={() => this.setState({ video: 'first', videoURL: '//www.youtube.com/embed/zHeLP7y6MS4' })}>
              Converting Condensed Structures to Bondline
            </div>
            <div className={`col s4 videoTopic vid2 ${this.state.video}`}
              style={{ lineHeight: '90px' }}
              onClick={() => this.setState({ video: 'second', videoURL: '//www.youtube.com/embed/orfGUiLbCEs' })}>
              Chirality
            </div>
            <div className={`col s4 videoTopic vid3 ${this.state.video}`}
              style={{ lineHeight: '90px' }}
              onClick={() => this.setState({ video: 'third', videoURL: '//www.youtube.com/embed/xYPc94maP1U' })}>
              SN2 Reactions
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FreeVideos;
