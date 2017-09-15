import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';
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
    payment: PropTypes.PropTypes.number,
    principalAmount: PropTypes.PropTypes.number,
    totalInterest: PropTypes.PropTypes.number,
    totalPaid: PropTypes.PropTypes.number,
    percentInterest: PropTypes.PropTypes.number,
    turnOverDate: PropTypes.PropTypes.instanceOf(Date),
    turnOverYearsAndMonths: PropTypes.PropTypes.string,
    turnOverInstallmentNumber: PropTypes.PropTypes.number,
    mortgageTotalPayments: PropTypes.PropTypes.number,
    mortgageTotalYearsAndMonth: PropTypes.PropTypes.string,
    lastPaymentDate: PropTypes.PropTypes.instanceOf(Date),
  }

  render() {
    return (
      <Paper zDepth={1}>

        <Grid fluid>
          <Row center='sm'>
            <Col>
              <h2>Mortgage Payment Information</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <Table selectable={false}>
                <TableBody displayRowCheckbox={false}>
                  <TableRow>
                    <TableRowColumn style={{ textAlign: 'left' }}>
                      <div style={{ fontSize: '1.5em' }}>Mortgage Payment</div>
                    </TableRowColumn>
                    <TableRowColumn style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '1.5em' }}>${(this.props.payment || 0).format(2)}</div>
                    </TableRowColumn>
                  </TableRow>
                </TableBody>
              </Table>
            </Col>
          </Row>
        </Grid>

        <Grid fluid>
          <Row center='sm'>
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

        <Grid fluid>
          <Row center='sm'>
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

        <Grid fluid>
          <Row center='sm'>
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
                      <div style={{ fontSize: '1.5em' }}>Principal Turnover Timeframe</div>
                    </TableRowColumn>
                    <TableRowColumn style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '1.5em' }}>{this.props.turnOverYearsAndMonths || ''}</div>
                    </TableRowColumn>
                  </TableRow>
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
                      <div style={{ fontSize: '1.5em' }}>Principal Turnover Payment Number</div>
                    </TableRowColumn>
                    <TableRowColumn style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '1.5em' }}>{this.props.turnOverInstallmentNumber || ''}</div>
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
