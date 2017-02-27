import { Component } from 'react';
import React from 'react';

export default class MortgagePayment extends Component {
  static propTypes = {
    payment: React.PropTypes.number.isRequired
  }

  render() {
    return (
      <div>
        <label htmlFor='mortgagePayment'>Mortgage Payment:</label>
        <input id='mortgagePayment' value={this.props.payment.toFixed(2)}></input>
      </div>
    );
  }
}
