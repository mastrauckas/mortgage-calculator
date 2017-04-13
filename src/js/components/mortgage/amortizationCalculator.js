import React from 'react';
import { Component } from 'react';
import Sugar from 'sugar';
import AmortizationScheduleActions from '../../actions/amortizationScheduleActions';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Row, Col } from 'react-flexbox-grid';

export default class AmortizationCalculator extends Component {

  schedule = {};
  domElements = {}

  constructor() {
    super();
    Sugar.extend();

    this.schedule = {
      principalAmount: 136068.31,
      startDate: '02/27/2017',
      installments: 360,
      payment: 777.98,
      interestRate: 3.75
    };

    AmortizationScheduleActions.getAmortizationScheduleAction(this.schedule);
  }

  onClick() {
    AmortizationScheduleActions.getAmortizationScheduleAction({
      principalAmount: this.schedule.principalAmount,
      startDate: this.schedule.startDate,
      installments: this.schedule.installments,
      payment: this.schedule.payment,
      interestRate: this.schedule.interestRate
    });
  }

  render() {
    return (
      <div>
        <Row around='md'>
          <Col md>

            <TextField
              name='mortgagePrincipal'
              floatingLabelText='Mortgage Principal Amount'
              hintText='Mortgage Principal Amount'
              type='text'
              defaultValue={`$${this.schedule.principalAmount.format(2)}`}
              onChange={(input, newValue) => { this.schedule.principalAmount = this.formatNumber(newValue); }} />
          </Col>

          <Col md>
            <TextField
              name='mortgageTerm'
              floatingLabelText='Mortgage Term'
              hintText='Mortgage Term'
              type="text"
              defaultValue={this.schedule.installments}
              onChange={(input, newValue) => { this.schedule.installments = Number(newValue); }} />
          </Col>

          <Col md>
            <TextField
              floatingLabelText='Mortgage Payment'
              type="text"
              defaultValue={`$${this.schedule.payment.format(2)}`}
              onChange={(input, newValue) => { this.schedule.payment = this.formatNumber(newValue); }} />
          </Col>

          <Col md>
            <TextField
              floatingLabelText='Mortgage Start Date'
              type="text"
              defaultValue={this.schedule.startDate}
              onChange={(input, newValue) => { this.schedule.startDate = new Date(newValue); }} />
          </Col>

          <Col md>
            <TextField
              floatingLabelText='Interest Rate'
              type="text"
              defaultValue={`${this.schedule.interestRate}%`}
              onChange={(input, newValue) => { this.schedule.interestRate = this.formatNumber(newValue); }} />
          </Col>

        </Row>

        <Row center='md' style={{ marginBottom: '2em', marginTop: '0.5em' }}>
          <Col md>
            <RaisedButton label='Calulate my Mortgage'
              onClick={this.onClick.bind(this)} />
          </Col>
        </Row>
      </div>
    );
  }

  formatNumber(number) {
    return number.replace(new RegExp('(\\$|,|\\%)', 'g'), '');
  }
}
