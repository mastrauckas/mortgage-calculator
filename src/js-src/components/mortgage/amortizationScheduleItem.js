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
    paymentDate: React.PropTypes.instanceOf(Date).isRequired,
    payment: React.PropTypes.number.isRequired,
    interestAmount: React.PropTypes.number.isRequired,
    principalAmount: React.PropTypes.number.isRequired,
    totalPrincipalAmount: React.PropTypes.number.isRequired
  }

  render() {
    return (
      <tr>
        <td>{this.props.installmentNumber}</td>
        <td className='mdl-data-table__cell--non-numeric'>{this.props.paymentDate.format('%m/%d/%Y')}</td>
        <td>${this.props.payment.format(2)}</td>
        <td>${this.props.interestAmount.format(2)}</td>
        <td>${this.props.principalAmount.format(2)}</td>
        <td>${this.props.totalPrincipalAmount.format(2)}</td>
      </tr>
    );
  }
}
