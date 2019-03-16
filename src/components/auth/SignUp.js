import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    samePassword: false,
    error: false
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSignUpSubmit = e => {
    e.preventDefault();

    const { firebase } = this.props;
    const { email, password, confirmPassword } = this.state;

    if (password === confirmPassword) {
      // Register with firebase and add information to firestore
      // If error set error message to state for render
      firebase
        .createUser({
          email,
          password
        })
        .catch(err => this.setState({ error: err.message }));
    } else {
      this.setState({
        samePassword: true
      });
    }
  };

  render() {
    const { auth } = this.props;

    // Route Guard
    if (auth.uid) return <Redirect to="/" />;

    const {
      email,
      password,
      confirmPassword,
      samePassword,
      error
    } = this.state;

    return (
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card bg-dark text-white">
            <div className="card-body">
              {error ? (
                <div className="alert alert-danger" role="alert">
                  {error}
                </div>
              ) : null}
              <h1 className="text-center pb-3 pt-2">
                <i className="fas fa-user-plus" /> Sign Up
              </h1>
              <form onSubmit={this.onSignUpSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    required
                    value={email}
                    autoComplete="off"
                    maxLength="30"
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    required
                    minLength="6"
                    value={password}
                    placeholder="Password must be 6 character or more..."
                    onChange={this.onChange}
                  />
                  {samePassword ? (
                    <div className="text-danger" role="alert">
                      Password Don't Match !
                    </div>
                  ) : null}
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="confirmPassword"
                    required
                    minLength="6"
                    placeholder="Password must be 6 character or more..."
                    value={confirmPassword}
                    onChange={this.onChange}
                  />
                  {samePassword ? (
                    <div className="text-danger" role="alert">
                      Password Don't Match !
                    </div>
                  ) : null}
                </div>
                <input
                  type="submit"
                  value="Register"
                  className="mt-3 btn btn-info btn-block"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SignUp.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default compose(
  firebaseConnect(),
  connect(mapStateToProps)
)(SignUp);
