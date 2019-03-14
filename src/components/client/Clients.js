import React, { Component } from 'react';

import HeaderClient from './HeaderClient';

class Clients extends Component {
  render() {
    return (
      <>
        <HeaderClient />
        <div className="container">
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
                  <tbody>
                    <tr>
                      <td>Sumitomo</td>
                      <td>Cutting Tool</td>
                      <td>5,235,598.00</td>
                      <td>
                        <a href="details.html" className="btn btn-secondary">
                          <i className="fas fa-angle-double-right" /> Details
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Post Two</td>
                      <td>Tech Gadgets</td>
                      <td>May 9 2018</td>
                      <td>
                        <a href="details.html" className="btn btn-secondary">
                          <i className="fas fa-angle-double-right" /> Details
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Post Three</td>
                      <td>Web Development</td>
                      <td>May 11 2018</td>
                      <td>
                        <a href="details.html" className="btn btn-secondary">
                          <i className="fas fa-angle-double-right" /> Details
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Post Four</td>
                      <td>Business</td>
                      <td>May 15 2018</td>
                      <td>
                        <a href="details.html" className="btn btn-secondary">
                          <i className="fas fa-angle-double-right" /> Details
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Post Five</td>
                      <td>Web Development</td>
                      <td>May 17 2018</td>
                      <td>
                        <a href="details.html" className="btn btn-secondary">
                          <i className="fas fa-angle-double-right" /> Details
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>Post Six</td>
                      <td>Health & Wellness</td>
                      <td>May 28 2018</td>
                      <td>
                        <a href="details.html" className="btn btn-secondary">
                          <i className="fas fa-angle-double-right" /> Details
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Clients;
