/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import './Homepage.css';
import axios from 'axios';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      author: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit=() => {
    const { title, body, author } = this.state;
    axios.post('https://qootest.com/posts', {
      title,
      body,
      author,
    }).then(() => {
      this.setState({
        title: '',
        body: '',
        author: '',
      });
    }).catch(() => {

    });
  }

  render() {
    const { title, body, author } = this.state;
    return (
      <div className="articleform">

        <div><input name="author" type="text" value={author} onChange={this.handleInputChange} placeholder="author" /></div>
        <br />
        <div><input name="title" type="text" value={title} onChange={this.handleInputChange} placeholder="title" /></div>
        <br />
        <textarea name="body" id="" cols="30" rows="10" value={body} onChange={this.handleInputChange} placeholder="body" />
        <br />
        <button type="submit" onClick={this.onSubmit}>Submit</button>
      </div>
    );
  }
}

export default Homepage;
