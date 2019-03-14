import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-5">
        <div className="container py-2">
          <Link to="/" className="navbar-brand">
            <span className="text-info">
              <i className="fas fa-users mr-1" />
            </span>
            {'  '}
            Client Manager
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                {' '}
                <Link to="/" className="nav-link">
                  About
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item mr-3">
                <Link to="/" className="btn btn-danger">
                  GG
                </Link>
              </li>
              <li className="nav-item">
                {' '}
                <Link to="/" className="nav-link">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
