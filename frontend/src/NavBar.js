import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="navbar navbar-expand navbar-dark">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/articles">Articles</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="#">Example</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
