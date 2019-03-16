import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { firestoreConnect, firebaseConnect } from 'react-redux-firebase';

class AddClient extends Component {
  state = {
    company: '',
    customerName: '',
    customerProduct: '',
    email: '',
    phone: '',
    tier: '',
    saleAmount: 0
  };

  // Control input sync with state
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // Add new client to firestore
  OnSubmitAdd = e => {
    e.preventDefault();

    const { history, firestore } = this.props;

    // set new client from the form
    const newClient = { ...this.state };

    // Turn string to number
    newClient.saleAmount = parseFloat(newClient.saleAmount);

    // Add to firestore
    firestore
      // Add newClient obj to cellection 'clients
      .add({ collection: 'clients' }, newClient)
      // If add successfully redirect to main page
      .then(() => history.push('/'));
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;

    return (
      <div className="row">
        <div className="col-md-9 mx-auto">
          <div className="card bg-dark mb-5 text-white">
            <div className="card-header">
              <h3>Add Client</h3>
            </div>
            <div className="card-body">
              <form onSubmit={this.OnSubmitAdd}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="company">Company</label>
                      <input
                        type="text"
                        name="company"
                        className="form-control"
                        required
                        maxLength="10"
                        value={this.state.company}
                        onChange={this.onChange}
                        placeholder="Customer Company..."
                        autoComplete="off"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="customerName">Customer's Name</label>
                      <input
                        type="text"
                        name="customerName"
                        className="form-control"
                        required
                        maxLength="8"
                        value={this.state.customerName}
                        onChange={this.onChange}
                        placeholder="Name of contact person..."
                        autoComplete="off"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="company">Customer's Product</label>
                      <input
                        type="text"
                        name="customerProduct"
                        className="form-control"
                        required
                        maxLength="30"
                        value={this.state.customerProduct}
                        onChange={this.onChange}
                        placeholder="Product..."
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        required
                        value={this.state.email}
                        onChange={this.onChange}
                        placeholder="Customer Email..."
                        autoComplete="off"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        required
                        maxLength="12"
                        value={this.state.phone}
                        onChange={this.onChange}
                        placeholder="Phone Number..."
                        autoComplete="off"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="tier">Tier</label>
                      <input
                        type="text"
                        name="tier"
                        className="form-control"
                        required
                        maxLength="1"
                        value={this.state.tier}
                        onChange={this.onChange}
                        placeholder="Tier (A/B/C/D) "
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="container">
                    <div className="form-group">
                      <label htmlFor="saleAmount">Sale Amount</label>
                      <input
                        type="number"
                        name="saleAmount"
                        className="form-control"
                        required
                        value={this.state.saleAmount}
                        onChange={this.onChange}
                        placeholder="Sale Amount..."
                        autoComplete="off"
                      />
                    </div>
                  </div>
                </div>
                <hr />
                <input type="submit" className="btn btn-info btn-block" />
              </form>
            </div>
          </div>
        </div>
      </div>
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
  firestoreConnect(),
  connect(mapStateToProps)
)(AddClient);
