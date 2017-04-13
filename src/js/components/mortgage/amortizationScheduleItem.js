import React from 'react';
import { Component } from 'react';
import Sugar from 'sugar';
import { TableRow, TableRowColumn } from 'material-ui/Table';

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
