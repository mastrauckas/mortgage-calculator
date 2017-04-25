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
      principalAmount: parseFloat(this.schedule.principalAmount),
      startDate: this.schedule.startDate,
      installments: parseInt(this.schedule.installments),
      payment: parseFloat(this.schedule.payment),
      interestRate: parseFloat(this.schedule.interestRate)
    });
  }

  render() {
    const styleTextFields = {
      width: '170px',
    };

    return (
      <div>
        <Row center='sm'>

          <Col sm={2}>
            <TextField
              style={styleTextFields}
              name='mortgagePrincipal'
              floatingLabelText='Principal Amount'
              type='text'
              defaultValue={`$${this.schedule.principalAmount.format(2)}`}
              onChange={(input, newValue) => { this.schedule.principalAmount = this.formatNumber(newValue); }} />
          </Col>


          <Col sm={2}>
            <TextField
              style={styleTextFields}
              name='mortgageTerm'
              floatingLabelText='Term Lenght'
              type="text"
              defaultValue={this.schedule.installments}
              onChange={(input, newValue) => { this.schedule.installments = Number(newValue); }} />
          </Col>

          <Col sm={2}>
            <TextField
              style={styleTextFields}
              floatingLabelText='Payment Amount'
              type="text"
              defaultValue={`$${this.schedule.payment.format(2)}`}
              onChange={(input, newValue) => { this.schedule.payment = this.formatNumber(newValue); }} />
          </Col>

          <Col sm={2}>
            <TextField
              style={styleTextFields}
              floatingLabelText='Start Date'
              type="text"
              defaultValue={this.schedule.startDate}
              onChange={(input, newValue) => { this.schedule.startDate = new Date(newValue); }} />
          </Col>

          <Col sm={2}>
            <TextField
              style={styleTextFields}
              floatingLabelText='Interest Rate'
              type="text"
              defaultValue={`${this.schedule.interestRate}%`}
              onChange={(input, newValue) => { this.schedule.interestRate = this.formatNumber(newValue); }} />
          </Col>

        </Row>

        <Row center='sm' style={{ marginBottom: '2em', marginTop: '0.5em' }}>
          <Col sm>
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
