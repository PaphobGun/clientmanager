import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

class Navbar extends Component {
  // Logout from firebase
  onLogoutClick = e => {
    e.preventDefault();

    const { firebase } = this.props;

    firebase.logout();
  };

  // If user is logged dont' show sign out button ;else show sign in button
  renderLogInLogOut = () => {
    const { auth } = this.props;

    if (auth.uid) {
      return (
        <>
          <li className="nav-item mr-3">
            <a href="/#!" className="btn btn-danger text-white">
              {auth.email}
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={this.onLogoutClick}
              href="#!"
              to="/login"
              className="nav-link"
            >
              Logout
            </a>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="nav-item">
            <Link to="/signup" className="nav-link">
              Signup
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link">
              Login
            </Link>
          </li>
        </>
      );
    }
  };

  // Render menu depends on user logged or not
  renderMenu = () => {
    const { auth } = this.props;

    if (auth.uid) {
      return (
        <>
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <i className="fas fa-home" /> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/clients/add" className="nav-link">
              <i className="fas fa-plus" /> Add Client
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              <i className="fas fa-question" /> About
            </Link>
          </li>
        </>
      );
    } else {
      return (
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            <i className="fas fa-question" /> About
          </Link>
        </li>
      );
    }
  };

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
            <ul className="navbar-nav mr-auto">{this.renderMenu()}</ul>
            <ul className="navbar-nav ml-auto">{this.renderLogInLogOut()}</ul>
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default compose(
  firebaseConnect(),
  connect(mapStateToProps)
)(Navbar);
