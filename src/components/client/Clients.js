import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link, Redirect } from 'react-router-dom';
import { firestoreConnect, firebaseConnect } from 'react-redux-firebase';

import HeaderClient from './HeaderClient';
import Spinner from '../layouts/Spinner';

// format number to look like currency
const formatNumber = num => {
  return num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

// render table child with data from props ( firestore )
const renderClients = clients => {
  // render each row of table with current item
  return clients.map(client => (
    <tr key={client.id}>
      <td>{client.company}</td>
      <td>{client.customerProduct}</td>
      <td>{client.tier}</td>
      <td>{formatNumber(client.saleAmount)}</td>
      <td>
        <Link to={`/clients/${client.id}`} className="btn btn-secondary">
          <i className="fas fa-angle-double-right" /> Details
        </Link>
      </td>
    </tr>
  ));
};

// sum total saleAmount
const sumTotalSale = clients => {
  // iterate over the clients[array] to sum total of sale amount
  const total = clients.reduce((acc, client) => {
    return acc + client.saleAmount;
  }, 0);

  return total;
};

const Clients = props => {
  const { clients, auth } = props;

  // If still loading data from firestore render Loading spinner instread
  if (clients) {
    // Route Guard
    if (!auth.uid) return <Redirect to="/login" />;

    return (
      <>
        <HeaderClient total={sumTotalSale(clients)} />
        <div className="container mb-5">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h4>Client List</h4>
                  <Link to="/clients/add" className="btn btn-info">
                    <i className="fas fa-plus" /> Add Client
                  </Link>
                </div>
                <table className="table table-responsive w-100 d-md-table table-striped">
                  <thead className="thead-dark">
                    <tr>
                      <th>Company</th>
                      <th>Product</th>
                      <th>Tier</th>
                      <th>Sale Amount (THB)</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>{renderClients(clients)}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <Spinner />;
  }
};

// pull [array] clients from reduxStore to props
const mapStateToProps = state => {
  return {
    clients: state.firestore.ordered.clients,
    auth: state.firebase.auth
  };
};

// put the data in collection'clients' in firestore into reduxstore(firestore) and attach to this component ordered by most sale amount at the top
export default compose(
  firebaseConnect(),
  firestoreConnect([
    { collection: 'clients', orderBy: ['saleAmount', 'desc'] }
  ]),
  connect(mapStateToProps)
)(Clients);
