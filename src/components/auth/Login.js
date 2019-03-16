import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

class Login extends Component {
  state = {
    email: '',
    password: '',
    error: false
  };

  // Control input
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSignInSubmit = e => {
    e.preventDefault();

    const { firebase } = this.props;
    const { email, password } = this.state;

    // Login & handle the error
    firebase
      .login({
        email,
        password
      })
      .then(res => this.setState({ error: false }))
      .catch(err => this.setState({ error: err.message }));
  };

  render() {
    // Route Guard
    const { auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;

    const { email, password, error } = this.state;

    return (
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card bg-dark text-white">
            <div className="card-body">
              {error ? (
                <div class="alert alert-danger" role="alert">
                  {error}
                </div>
              ) : null}
              <h1 className="text-center pb-3 pt-2">
                <i className="fas fa-sign-in-alt" /> Sign In
              </h1>
              <form onSubmit={this.onSignInSubmit}>
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
                    placeholder="Email..."
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
                    placeholder="Password..."
                    onChange={this.onChange}
                  />
                </div>
                <input
                  type="submit"
                  value="Sign In"
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

Login.propTypes = {
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
)(Login);
