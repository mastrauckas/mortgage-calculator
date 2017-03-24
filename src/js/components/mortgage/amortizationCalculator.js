import React from 'react';
import { Component } from 'react';
import Sugar from 'sugar';
import AmortizationScheduleActions from '../../actions/amortizationScheduleActions';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


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
      <div className='col-md-3'>
        <div>
          <h4>Calulate My Mortgage</h4>
        </div>
        <TextField
          floatingLabelText='Mortgage Principal Amount'
          type="text"
          defaultValue={`$${this.schedule.principalAmount.format(2)}`}
          onChange={(input, newValue) => { this.schedule.principalAmount = this.formatNumber(newValue); }} />
        <TextField
          floatingLabelText='Mortgage Term'
          type="text"
          defaultValue={this.schedule.installments}
          onChange={(input, newValue) => { this.schedule.installments = Number(newValue); }} />
        <TextField
          floatingLabelText='Mortgage Payment'
          type="text"
          defaultValue={`$${this.schedule.payment.format(2)}`}
          onChange={(input, newValue) => { this.schedule.payment = this.formatNumber(newValue); }} />
        <TextField
          floatingLabelText='Mortgage Start Date'
          type="text"
          defaultValue={this.schedule.startDate}
          onChange={(input, newValue) => { this.schedule.startDate = new Date(newValue); }} />
        <TextField
          floatingLabelText='Interest Rate'
          type="text"
          defaultValue={`${this.schedule.interestRate}%`}
          onChange={(input, newValue) => { this.schedule.interestRate = this.formatNumber(newValue); }} />
        <RaisedButton label='Calulate my Mortgage'
          onClick={this.onClick.bind(this)} />
      </div>
    );
  }

  formatNumber(number) {
    return number.replace(new RegExp('(\\$|,|\\%)', 'g'), '');
  }
}
