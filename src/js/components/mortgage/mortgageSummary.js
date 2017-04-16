import React from 'react';
import { Component } from 'react';
import { Card, CardTitle } from 'material-ui/Card';
import { Table, TableBody, TableRow, TableRowColumn } from 'material-ui/Table';
import Sugar from 'sugar';

export default class MortgageSummary extends Component {
  constructor() {
    super();
    Sugar.extend();
  }

  static propTypes = {
    installmentNumber: React.PropTypes.number,
    paymentDate: React.PropTypes.instanceOf(Date),
    payment: React.PropTypes.number,
    interestAmount: React.PropTypes.number,
    principalAmount: React.PropTypes.number,
    totalInterest: React.PropTypes.number,
    totalPaid: React.PropTypes.number,
    percentInterest: React.PropTypes.number,
    turnOverDate: React.PropTypes.instanceOf(Date),
    turnOverYearsAndMonths: React.PropTypes.string,
    mortgageTotalPayments: React.PropTypes.number,
    mortgageTotalYearsAndMonth: React.PropTypes.string,
    lastPaymentDate: React.PropTypes.instanceOf(Date),
  }

  render() {
    return (
      <Card>
        <CardTitle title="Your Mortgage Summary Information" />
        <Table selectable={false}>
          <TableBody displayRowCheckbox={false}>
            <TableRow>
              <TableRowColumn style={{ textAlign: 'left' }}>
                <h2>Mortgage Principal</h2>
              </TableRowColumn>
              <TableRowColumn style={{ textAlign: 'right' }}>
                <h2>${(this.props.principalAmount || 0).format(2)}</h2>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn style={{ textAlign: 'left' }}>
                <h2>Total Interest</h2>
              </TableRowColumn>
              <TableRowColumn style={{ textAlign: 'right' }}>
                <h2>${(this.props.totalInterest || 0).format(2)}</h2>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn style={{ textAlign: 'left' }}>
                <h2>Total Paid</h2>
              </TableRowColumn>
              <TableRowColumn style={{ textAlign: 'right' }}>
                <h2>${(this.props.totalPaid || 0).format(2)}</h2>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn style={{ textAlign: 'left' }}>
                <h2>Percent Paid In Interest</h2>
              </TableRowColumn>
              <TableRowColumn style={{ textAlign: 'right' }}>
                <h2>{(this.props.percentInterest || 0).format(2)}%</h2>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn style={{ textAlign: 'left' }}>
                <h2>Principal Turnover Date</h2>
              </TableRowColumn>
              <TableRowColumn style={{ textAlign: 'right' }}>
                <h2>{(this.props.turnOverDate || 'n/a').format('%m/%d/%Y')}</h2>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn style={{ textAlign: 'left' }}>
                <h2>Principal Turnover Timeframe</h2>
              </TableRowColumn>
              <TableRowColumn style={{ textAlign: 'right' }}>
                <h2>{this.props.turnOverYearsAndMonths || ''}</h2>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn style={{ textAlign: 'left' }}>
                <h2>Total Mortgage Payments</h2>
              </TableRowColumn>
              <TableRowColumn style={{ textAlign: 'right' }}>
                <h2>{this.props.mortgageTotalPayments || ''}</h2>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn style={{ textAlign: 'left' }}>
                <h2>Total Mortgage Time Length</h2>
              </TableRowColumn>
              <TableRowColumn style={{ textAlign: 'right' }}>
                <h2>{this.props.mortgageTotalYearsAndMonth || ''}</h2>
              </TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn style={{ textAlign: 'left' }}>
                <h2>Last Payment Date</h2>
              </TableRowColumn>
              <TableRowColumn style={{ textAlign: 'right' }}>
                <h2>{(this.props.lastPaymentDate || 'n/a').format('%m/%d/%Y')}</h2>
              </TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    );
  }
}
