import React from 'react';
import { Component } from 'react';
import Sugar from 'sugar';
import AmortizationScheduleActions from '../../actions/amortizationScheduleActions';

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
      principalAmount: this.formatNumber(this.domElements.principalAmount.value),
      startDate: new Date(this.domElements.startDate.value),
      installments: Number(this.domElements.installments.value),
      payment: this.formatNumber(this.domElements.payment.value),
      interestRate: this.formatNumber(this.domElements.interestRate.value)
    });
  }

  render() {
    return (
      <div className='col l3'>
        <div>
          <h4>Calulate My Mortgage</h4>
        </div>
        <div id='calculator'>
          <div className='input-field'>
            <label htmlFor='mortgagePrincipalAmount'>
              Mortgage Principal Amount
          </label>
            <input id='mortgagePrincipalAmount'
              type='text'
              defaultValue={`$${this.schedule.principalAmount.format(2)}`}
              ref={(input) => { this.domElements.principalAmount = input; }}>
            </input>
          </div>
          <div className='input-field'>
            <label htmlFor='mortgageTerm'>
              Mortgage Term
          </label>
            <input id='mortgageTerm'
              type='text'
              defaultValue={this.schedule.installments}
              ref={(input) => { this.domElements.installments = input; }}>
            </input>
          </div>
          <div className='input-field'>
            <label htmlFor='mortgagePayment'>
              Mortgage Payment
        </label>
            <input id='mortgagePayment'
              type='text'
              defaultValue={`$${this.schedule.payment.format(2)}`}
              ref={(input) => { this.domElements.payment = input; }}>
            </input>
          </div>
          <div className='input-field'>
            <label htmlFor='mortgageStartDate'>
              Mortgage Start Date
          </label>
            <input id='mortgageStartDate'
              type='text'
              defaultValue={this.schedule.startDate}
              ref={(input) => { this.domElements.startDate = input; }}>
            </input>
          </div>
          <div className='input-field'>
            <label htmlFor='mortgageInterestRate'>
              Interest Rate
          </label>
            <input id='mortgageInterestRate'
              type='text'
              defaultValue={`${this.schedule.interestRate}%`}
              ref={(input) => { this.domElements.interestRate = input; }}>
            </input>
          </div>
          <div className='center'>
            <button id='calculateMortgage'
              onClick={this.onClick.bind(this)}
              className='waves-effect waves-light btn'>
              Calculate
        </button>
          </div>
        </div>
      </div>
    );
  }

  formatNumber(number) {
    return number.replace(new RegExp('(\\$|,|\\%)', 'g'), '');
  }
}
