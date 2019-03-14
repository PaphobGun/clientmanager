import React, { Component } from 'react';

class HeaderClient extends Component {
  state = {
    target: 3000000
  };

  // render real time Month
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

  // render real time year
  renderYear = () => {
    return new Date().getFullYear();
  };

  // format number to look like currency
  formatNumber = num => {
    return num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  };

  // render Percentage of Total Sale Amount
  renderTotalSale = total => {
    const percent = (total / this.state.target) * 100;
    // percentages is over than 50% render green text ;else red text
    if (percent > 50) {
      return (
        <div className="percent percent-green">{Math.floor(percent)}%</div>
      );
    } else {
      return <div className="percent percent-red">{percent}</div>;
    }
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
              <div className="text-target">
                {this.formatNumber(this.state.target)} THB
              </div>
              <div className="text-white text-target-label">
                TOTAL <span className="d-none d-md-inline">SALE AMOUNT</span>
              </div>
              <div className="text-sale-amount">
                {this.formatNumber(this.props.total)} THB
              </div>
            </div>
          </div>
          <div className="col-md-5 text-center">
            <div className="card bg-dark card-height d-flex justify-content-center">
              <div className="display-4 text-white">SALE PROGRESS</div>
              {this.renderTotalSale(this.props.total)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderClient;
