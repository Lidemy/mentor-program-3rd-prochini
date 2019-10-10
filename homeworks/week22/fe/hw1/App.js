/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Nav from './nav';
import About from './about/About';
import Homepage from './home/Homepage';
import PostList from './postlist/PostList';
import Post from './post/Post';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <div className="page">
            <Route path="/home" component={Homepage} />
            <Route path="/about" component={About} />
            <Route exact path="/post" component={PostList} />
            <Route path="/post/:postId" component={Post} />
          </div>
        </div>
      </Router>

    );
  }
}
export default App;
