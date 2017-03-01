import React from 'react';
import { Component } from 'react';
import Sugar from 'sugar';

export default class AmortizationScheduleItem extends Component {
  constructor() {
    super();
    Sugar.extend();
  }

  static propTypes = {
    installmentNumber: React.PropTypes.number.isRequired,
    installmentDate: React.PropTypes.instanceOf(Date).isRequired,
    payment: React.PropTypes.number.isRequired,
    interestAmount: React.PropTypes.number.isRequired,
    principalAmount: React.PropTypes.number.isRequired,
    totalPrincipalAmount: React.PropTypes.number.isRequired
  }

  render() {
    return (
      <tr>
        <td>{this.props.installmentNumber}</td>
        <td>{this.props.installmentDate.format('%m/%d/%Y')}</td>
        <td>${this.props.payment.toFixed(2)}</td>
        <td>${this.props.interestAmount.toFixed(2)}</td>
        <td>${this.props.principalAmount.toFixed(2)}</td>
        <td>${this.props.totalPrincipalAmount.format(2)}</td>
      </tr>
    );
  }

  getDate(date) {
    //use a different library
    const d = new Date(date);
    return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
  }
}
