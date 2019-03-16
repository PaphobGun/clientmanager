import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect, firebaseConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';

import ListItem from '../layouts/ListItem';
import Spinner from '../layouts/Spinner';

class Client extends Component {
  state = {
    customerName: '',
    customerProduct: '',
    email: '',
    phone: '',
    tier: '',
    saleAmount: 0,
    showEdit: false,
    didUpdate: false
  };

  // get data from props and add it to state
  componentDidUpdate() {
    const { client } = this.props;

    if (client) {
      if (!this.state.didUpdate) {
        this.setState({ ...client, didUpdate: true });
      }
    }
  }

  // format number to look like currency
  formatNumber = num => {
    return num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  };

  // Control input
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  // Update client
  onUpdateSubmit = e => {
    e.preventDefault();

    const {
      customerName,
      customerProduct,
      email,
      phone,
      tier,
      saleAmount,
      showEdit
    } = this.state;

    const { firestore, client } = this.props;

    // Init updated Client
    const updatedClient = {
      customerName,
      customerProduct,
      email,
      phone,
      tier,
      saleAmount
    };

    // turn to number
    updatedClient.saleAmount = parseFloat(updatedClient.saleAmount);

    // Update Client in firestore and then close the form
    firestore
      .update({ collection: 'clients', doc: client.id }, updatedClient)
      .then(this.setState({ showEdit: !showEdit }));
  };

  // Toggle edit form
  toggleEdit = () => {
    this.setState({
      showEdit: !this.state.showEdit
    });
  };

  // Delete client from firestore and navigate to main page
  onDeleteClick = () => {
    const { client, history, firestore } = this.props;

    firestore
      .delete({ collection: 'clients', doc: client.id })
      .then(history.push('/'));
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;

    const {
      saleAmount,
      email,
      phone,
      customerName,
      customerProduct,
      tier,
      showEdit
    } = this.state;

    const { client } = this.props;

    // If loaded ;else render spinner
    if (client) {
      return (
        <div className="row">
          <div className="col-md-9 mx-auto">
            <div className="card bg-dark text-white">
              <div className="card-header">
                <div className="row">
                  <div className="col-md-6">
                    <h3>{client.company}</h3>
                  </div>
                  <div className="col-md-6">
                    <div className="btn-group float-right">
                      <button
                        onClick={this.toggleEdit}
                        className="btn btn-warning"
                      >
                        Edit
                      </button>
                      <button
                        onClick={this.onDeleteClick}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <form onSubmit={this.onUpdateSubmit}>
                  <div className="row">
                    <div className="col-md-8 col-sm-6">
                      <div>Client ID: {client.id}</div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                      <div>
                        Sale Amount: {this.formatNumber(client.saleAmount)} THB
                      </div>
                      {showEdit ? (
                        <input
                          type="number"
                          className="form-control form-control-sm"
                          name="saleAmount"
                          placeholder="Sale Amount..."
                          value={saleAmount}
                          onChange={this.onChange}
                        />
                      ) : null}
                    </div>
                  </div>
                  <hr />
                  <ul className="list-group">
                    <li className="list-group-item list-group-item-dark">
                      Contact Person: {client.customerName}
                      {showEdit ? (
                        <ListItem
                          name="customerName"
                          placeholder="Name..."
                          parentState={customerName}
                          onChange={this.onChange}
                        />
                      ) : null}
                    </li>
                    <li className="list-group-item list-group-item-dark">
                      Contact Email: {client.email}
                      {showEdit ? (
                        <ListItem
                          type="email"
                          placeholder="Email..."
                          name="email"
                          parentState={email}
                          onChange={this.onChange}
                        />
                      ) : null}
                    </li>
                    <li className="list-group-item list-group-item-dark">
                      Phone: {client.phone}
                      {showEdit ? (
                        <ListItem
                          name="phone"
                          placeholder="Phone Number..."
                          parentState={phone}
                          onChange={this.onChange}
                        />
                      ) : null}
                    </li>
                    <li className="list-group-item list-group-item-dark">
                      Product: {client.customerProduct}
                      {showEdit ? (
                        <ListItem
                          name="customerProduct"
                          placeholder="Customer Product..."
                          parentState={customerProduct}
                          onChange={this.onChange}
                        />
                      ) : null}
                    </li>
                    <li className="list-group-item list-group-item-dark">
                      Tier: {client.tier}
                      {showEdit ? (
                        <ListItem
                          name="tier"
                          placeholder="A/B/C/D"
                          parentState={tier}
                          onChange={this.onChange}
                        />
                      ) : null}
                    </li>
                    {showEdit ? (
                      <input
                        type="submit"
                        value="Submit"
                        className="btn btn-block btn-info mt-2"
                      />
                    ) : null}
                  </ul>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

// get Client details from reduxstore ( filter by id )
const mapstateToProps = (state, ownProps) => {
  const { client } = state.firestore.ordered;

  return {
    client: client && client[0],
    auth: state.firebase.auth
  };
};

// get Client details from firestore to reduxstore ( filter by id from url )
export default compose(
  firebaseConnect(),
  firestoreConnect(props => [
    { collection: 'clients', storeAs: 'client', doc: props.match.params.id }
  ]),
  connect(mapstateToProps)
)(Client);
