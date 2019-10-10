import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './Nav.css';


class Item extends Component {
  render() {
    const { to, children, exact } = this.props;
    return (
      <Route
        path={to}
        exact={exact}
        children={({ match }) => (
          <li className={match ? 'active' : ''}>
            <Link to={to}>
              {children}
            </Link>
          </li>
        )}
      />
    );
  }
}
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      // eslint-disable-next-line react/jsx-one-expression-per-line
      <nav className="nav">
        <ul className="nav__list">
         <Item to="/home" exact class="write_link">
            Write a post
          </Item>
          <Item to="/post">
            Post
          </Item>
          <Item to="/about">
            About
          </Item>
        </ul>
      </nav>
    );
  }
}
export default Nav;
