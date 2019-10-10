/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-filename-extension */
// eslint-disable-next-line import/no-unresolved
import React, { Component } from 'react';
import './About.css';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="header">
        <div className="avatar">
          <img src="https://i.imgur.com/pEEWeull.jpg" alt="" />
        </div>
        <div className="descripe">
          <span className="name">prochini</span>
          // eslint-disable-next-line react/jsx-one-expression-per-line
          <p>
          Do the magic with code, achieve epic programming victories
          </p>
        </div>
      </div>
    );
  }
}
export default About;
