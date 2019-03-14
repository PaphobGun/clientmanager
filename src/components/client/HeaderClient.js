import React, { Component } from 'react';

class Clients extends Component {
  renderMonth = () => {
    const month = new Date().getMonth();
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'Octobe',
      'November',
      'December'
    ];
    return months[month].toUpperCase();
  };

  renderYear = () => {
    return new Date().getFullYear();
  };

  render() {
    return (
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-7 text-center">
            <div className="card bg-dark card-height mb-resp-card d-flex justify-content-center">
              <div className="text-white text-target-label">
                TARGET{' '}
                <span className="d-none d-md-inline">
                  IN {this.renderMonth()} {this.renderYear()}
                </span>
              </div>
              <div className="text-target">3,000,000.00 THB</div>
              <div className="text-white text-target-label">
                TOTAL <span className="d-none d-md-inline">SALE AMOUNT</span>
              </div>
              <div className="text-sale-amount">2,850,000.00 THB</div>
            </div>
          </div>
          <div className="col-md-5 text-center">
            <div className="card bg-dark card-height d-flex justify-content-center">
              <div className="display-4 text-white">SALE PROGRESS</div>
              <div className="percent percent-green">95%</div>{' '}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Clients;
