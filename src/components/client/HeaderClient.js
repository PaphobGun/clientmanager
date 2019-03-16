import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';

class HeaderClient extends Component {
  // Init state
  // target is comming from the firestore or default is 0
  state = {
    showTargetForm: false,
    target: this.props.targetFirestore || 0,
    editedTarget: 0
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
    const percent = (total / this.props.targetFirestore) * 100;

    // If loading render 0
    if (!this.props.targetFirestore)
      return <div className="percent percent-green">0%</div>;

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
    const { firestore } = this.props;

    e.preventDefault();

    // New target is comming from the state (form input)
    const updatedTarget = {
      saleTarget: parseFloat(editedTarget)
    };

    // Update target in firestore
    firestore.update(
      { collection: 'target', doc: '9fAxGHgEhcL69sMxfDcA' },
      updatedTarget
    );

    // close the form
    this.setState({
      showTargetForm: !showTargetForm
    });
  };

  // show form edit target
  renderTargetForm = () => {
    const { editedTarget, showTargetForm } = this.state;

    // Init targetForm
    let targetForm = '';
    // If target form should display
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

  // render Target from firestore
  renderTarget = () => {
    const { targetFirestore } = this.props;

    // declare target variable
    let targetData = 0;
    // If loaded format and return it
    if (targetFirestore) {
      targetData = (
        <div className="text-target">
          {this.formatNumber(targetFirestore)} THB
        </div>
      );
    } else {
      targetData = <div className="text-target">0 THB</div>;
    }

    return targetData;
  };

  render() {
    const { showTargetForm } = this.state;
    const { total } = this.props;

    return (
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-7 text-center">
            <div className="card bg-dark card-height mb-resp-card d-flex justify-content-center">
              <div className="text-white text-target-label">
                TARGET{' '}
                <span className="d-none d-lg-inline">
                  IN {this.renderMonth()} {this.renderYear()}
                </span>{' '}
                <small>
                  <i
                    // Toggle the form
                    onClick={() =>
                      this.setState({
                        showTargetForm: !showTargetForm
                      })
                    }
                    className="fas fa-pencil-alt text-warning btn-edit"
                  />
                </small>
              </div>
              {this.renderTargetForm()}
              {this.renderTarget()}
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

HeaderClient.propTypes = {
  targetFirestore: PropTypes.number
};

// get Target from redux store to props
const mapStateToProps = state => {
  const { target } = state.firestore.ordered;

  return {
    targetFirestore: target && target[0].saleTarget
  };
};

export default compose(
  firestoreConnect([{ collection: 'target' }]),
  connect(mapStateToProps)
)(HeaderClient);
