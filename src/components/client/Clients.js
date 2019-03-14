import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';

import HeaderClient from './HeaderClient';
import Spinner from '../layouts/Spinner';

class Clients extends Component {
  // format number to look like currency
  formatNumber = num => {
    return num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  };

  // render table child with data from props ( firestore )
  renderClients = () => {
    const { clients } = this.props;
    // render each row of table with current item
    return clients.map(client => (
      <tr key={client.id}>
        <td>{client.company}</td>
        <td>{client.customerProduct}</td>
        <td>{this.formatNumber(client.saleAmount)}</td>
        <td>
          <Link to={`/client/${client.id}`} className="btn btn-secondary">
            <i className="fas fa-angle-double-right" /> Details
          </Link>
        </td>
      </tr>
    ));
  };

  // sum total saleAmount
  sumTotalSale = () => {
    const { clients } = this.props;
    // iterate over the clients[array] to sum total of sale amount
    const total = clients.reduce((acc, client) => {
      return acc + client.saleAmount;
    }, 0);

    return total;
  };

  render() {
    // If still loading data from firestore render Loading spinner instread
    if (this.props.clients) {
      return (
        <>
          <HeaderClient total={this.sumTotalSale()} />
          <div className="container mb-5">
            <div className="row">
              <div className="col">
                <div className="card">
                  <div className="card-header">
                    <h4>Client List</h4>
                  </div>
                  <table className="table table-responsive w-100 d-md-table table-striped">
                    <thead className="thead-dark">
                      <tr>
                        <th>Company</th>
                        <th>Product</th>
                        <th>Sale Amount (THB)</th>
                        <th />
                      </tr>
                    </thead>
                    <tbody>{this.renderClients()}</tbody>
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
  }
}

// pull [array] clients from reduxStore to props
const mapStateToProps = state => {
  return {
    clients: state.firestore.ordered.clients
  };
};

// put the data in collection'clients' in firestore into reduxstore(firestore) and attach to this component
export default compose(
  firestoreConnect([{ collection: 'clients' }]),
  connect(mapStateToProps)
)(Clients);
