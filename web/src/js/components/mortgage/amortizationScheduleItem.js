import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';
import Sugar from 'sugar';
import { TableRow, TableRowColumn } from 'material-ui/Table';

export default class AmortizationScheduleItem extends Component {
  constructor() {
    super();
    Sugar.extend();
  }

  static propTypes = {
    installmentNumber: PropTypes.PropTypes.number.isRequired,
    paymentDate: PropTypes.PropTypes.instanceOf(Date).isRequired,
    payment: PropTypes.PropTypes.number.isRequired,
    interestAmount: PropTypes.PropTypes.number.isRequired,
    principalAmount: PropTypes.PropTypes.number.isRequired,
    totalPrincipalAmount: PropTypes.PropTypes.number.isRequired
  }

  render() {
    return (

      <TableRow key={this.props.installmentNumber}>
        <TableRowColumn style={{ textAlign: 'center' }}>{this.props.installmentNumber}</TableRowColumn>
        <TableRowColumn style={{ textAlign: 'center' }}>{this.props.paymentDate.format('%m/%d/%Y')}</TableRowColumn>
        <TableRowColumn style={{ textAlign: 'center' }}>${this.props.payment.format(2)}</TableRowColumn>
        <TableRowColumn style={{ textAlign: 'center' }}>${this.props.interestAmount.format(2)}</TableRowColumn>
        <TableRowColumn style={{ textAlign: 'center' }}>${this.props.principalAmount.format(2)}</TableRowColumn>
        <TableRowColumn style={{ textAlign: 'center' }}>${this.props.totalPrincipalAmount.format(2)}</TableRowColumn>
      </TableRow>
    );
  }
}
