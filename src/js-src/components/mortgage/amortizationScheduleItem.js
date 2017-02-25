import React from 'react';
import { Component } from 'react';

export default class AmortizationScheduleItem extends Component {

  static propTypes = {
    installmentNumber: React.PropTypes.number.isRequired,
    installmentDate: React.PropTypes.string.isRequired,
    payment: React.PropTypes.number.isRequired,
    interestAmount: React.PropTypes.number.isRequired,
    principalAmount: React.PropTypes.number.isRequired,
    balance: React.PropTypes.number.isRequired
  }

  render() {
    return (
      <tr>
        <td>{this.props.installmentNumber}</td>
        <td>{this.props.installmentDate}</td>
        <td>{this.props.payment.toFixed(2)}</td>
        <td>{this.props.interestAmount.toFixed(2)}</td>
        <td>{this.props.principalAmount.toFixed(2)}</td>
        <td>{this.props.balance.toFixed(2)}</td>
      </tr>
    );
  }
}
