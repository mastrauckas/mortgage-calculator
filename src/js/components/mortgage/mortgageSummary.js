import React from 'react';
import { Component } from 'react';
import { Card } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import { Table, TableBody, TableRow, TableRowColumn, TableFooter } from 'material-ui/Table';
import { Grid, Row, Col } from 'react-flexbox-grid';
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
      <Paper zDepth={3}>
        <Grid>
          <Row center='md'>
            <Col>
              <h2>Mortgage Investment Information</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <Table selectable={false}>
                <TableBody displayRowCheckbox={false}>
                  <TableRow>
                    <TableRowColumn style={{ textAlign: 'left' }}>
                      <div style={{ fontSize: '1.5em' }}>Mortgage Principal</div>
                    </TableRowColumn>
                    <TableRowColumn style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '1.5em' }}>${(this.props.principalAmount || 0).format(2)}</div>
                    </TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn style={{ textAlign: 'left' }}>
                      <div style={{ fontSize: '1.5em' }}>Total Interest</div>
                    </TableRowColumn>
                    <TableRowColumn style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '1.5em' }}>${(this.props.totalInterest || 0).format(2)}</div>
                    </TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn style={{ textAlign: 'left' }}>
                      <div style={{ fontSize: '1.5em' }}>Percent Paid In Interest</div>
                    </TableRowColumn>
                    <TableRowColumn style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '1.5em' }}>{(this.props.percentInterest || 0).format(2)}%</div>
                    </TableRowColumn>
                  </TableRow>
                </TableBody>
                <TableFooter adjustForCheckbox={false}>
                  <TableRow>
                    <TableRowColumn>
                      <h2>Total Paid</h2>
                    </TableRowColumn>
                    <TableRowColumn style={{ textAlign: 'right' }}>
                      <h2>${(this.props.totalPaid || 0).format(2)}</h2>
                    </TableRowColumn>
                  </TableRow>
                </TableFooter>
              </Table>
            </Col>
          </Row>
        </Grid>

        <Grid>
          <Row center='md'>
            <Col>
              <h2>Mortgage End Information</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <Table selectable={false}>
                <TableBody displayRowCheckbox={false}>
                  <TableRow>
                    <TableRowColumn style={{ textAlign: 'left' }}>
                      <div style={{ fontSize: '1.5em' }}>Total Mortgage Time Length</div>
                    </TableRowColumn>
                    <TableRowColumn style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '1.5em' }}>{this.props.mortgageTotalYearsAndMonth || ''}</div>
                    </TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn style={{ textAlign: 'left' }}>
                      <div style={{ fontSize: '1.5em' }}>Last Payment Date</div>
                    </TableRowColumn>
                    <TableRowColumn style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '1.5em' }}>{(this.props.lastPaymentDate || 'n/a').format('%m/%d/%Y')}</div>
                    </TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn style={{ textAlign: 'left' }}>
                      <div style={{ fontSize: '1.5em' }}>Total Mortgage Payments</div>
                    </TableRowColumn>
                    <TableRowColumn style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '1.5em' }}>{this.props.mortgageTotalPayments || ''}</div>
                    </TableRowColumn>
                  </TableRow>
                </TableBody>
              </Table>
            </Col>
          </Row>
        </Grid>

        <Grid>
          <Row center='md'>
            <Col>
              <h2>More Principal Than Interest</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <Table selectable={false}>
                <TableBody displayRowCheckbox={false}>
                  <TableRow>
                    <TableRowColumn style={{ textAlign: 'left' }}>
                      <div style={{ fontSize: '1.5em' }}>Principal Turnover Date</div>
                    </TableRowColumn>
                    <TableRowColumn style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '1.5em' }}>{(this.props.turnOverDate || 'n/a').format('%m/%d/%Y')}</div>
                    </TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn style={{ textAlign: 'left' }}>
                      <div style={{ fontSize: '1.5em' }}>Principal Turnover Timeframe</div>
                    </TableRowColumn>
                    <TableRowColumn style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '1.5em' }}>{this.props.turnOverYearsAndMonths || ''}</div>
                    </TableRowColumn>
                  </TableRow>
                </TableBody>
              </Table>
            </Col>
          </Row>
        </Grid>
      </Paper>
    );
  }
}
