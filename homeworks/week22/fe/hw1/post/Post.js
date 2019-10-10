/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import axios from 'axios';
import './Post.css';
import { Link } from 'react-router-dom';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {},
    };
  }

  componentDidMount() {
    const { postId } = this.props.match.params;
    axios.get(`https://qootest.com/posts/${postId}`)
      .then((response) => {
        this.setState({
          post: response.data,
        });
        console.log(postId);
      });
  }

  render() {
    const { post } = this.state;
    return (
      <div>
        <Link to="/post">back</Link>
        <div className="post-item">
          <h1 className="post-item__id">{!post.title ? 'Loading...' : post.title}</h1>
          <span className="post_author">{post.author}</span>
          <p className="post-item__body">{post.body}</p>
        </div>
      </div>
    );
  }
}
export default Post;
