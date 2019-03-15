import React, { Component } from 'react';

class HeaderClient extends Component {
  // initial state
  // target is from the localstorage or 1,000,000
  state = {
    target: parseFloat(localStorage.getItem('target')) || 1000000,
    editedTarget: 0,
    showTargetForm: false
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
      return <div className="percent percent-red">{Math.floor(percent)}%</div>;
    }
  };

  // control form
  onChange = e => {
    this.setState({ editedTarget: e.target.value });
  };

  // Set new target
  targetSubmit = e => {
    const { showTargetForm, editedTarget } = this.state;

    e.preventDefault();

    // set new target and close the form
    this.setState({
      target: parseFloat(editedTarget),
      showTargetForm: !showTargetForm
    });

    // save new target into localstorage
    localStorage.setItem('target', editedTarget);
  };

  // show form edit target
  renderTargetForm = () => {
    const { editedTarget, showTargetForm } = this.state;

    // Init targetForm
    let targetForm = '';
    // If balance form should display
    if (showTargetForm) {
      targetForm = (
        <form onSubmit={this.targetSubmit}>
          <div className="input-group container">
            <input
              type="number"
              className="form-control"
              name="target"
              placeholder="Set Target"
              value={editedTarget}
              onChange={this.onChange}
            />
            <div className="input-group-append">
              <input type="submit" value="OK" className="btn btn-info" />
            </div>
          </div>
        </form>
      );
    } else {
      targetForm = null;
    }

    return targetForm;
  };

  render() {
    const { target, showTargetForm } = this.state;
    const { total } = this.props;

    return (
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-7 text-center">
            <div className="card bg-dark card-height mb-resp-card d-flex justify-content-center">
              <div className="text-white text-target-label">
                TARGET{' '}
                <span className="d-none d-md-inline">
                  IN {this.renderMonth()} {this.renderYear()}
                </span>{' '}
                <small>
                  <a
                    href="#!"
                    onClick={() =>
                      this.setState({
                        showTargetForm: !showTargetForm
                      })
                    }
                  >
                    <i className="fas fa-pencil-alt text-warning" />
                  </a>
                </small>
              </div>
              {this.renderTargetForm()}
              <div className="text-target">{this.formatNumber(target)} THB</div>
              <div className="text-white text-target-label">
                TOTAL <span className="d-none d-md-inline">SALE AMOUNT</span>
              </div>
              <div className="text-sale-amount">
                {this.formatNumber(total)} THB
              </div>
            </div>
          </div>
          <div className="col-md-5 text-center">
            <div className="card bg-dark card-height d-flex justify-content-center">
              <div className="text-target-label text-white">SALE PROGRESS</div>
              {this.renderTotalSale(total)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderClient;
