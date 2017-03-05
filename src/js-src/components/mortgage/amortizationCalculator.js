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
      startDate: this.domElements.startDate.value,
      installments: Number(this.domElements.installments.value),
      payment: this.formatNumber(this.domElements.payment.value),
      interestRate: Number(this.domElements.interestRate.value)
    });
  }

  render() {
    return (
      <section>
        <div>
          <label htmlFor='mortgagePrincipalAmount'>Mortgage Principal Amount:</label>
          <input id='mortgagePrincipalAmount'
            defaultValue={`$${this.schedule.principalAmount.format(2)}`}
            ref={(input) => { this.domElements.principalAmount = input; }}>
          </input>
        </div >
        <div>
          <label htmlFor='mortgageTerm'>Mortgage Term:</label>
          <input id='mortgageTerm'
            defaultValue={this.schedule.installments}
            ref={(input) => { this.domElements.installments = input; }}>
          </input>
        </div>
        <div>
          <label htmlFor='mortgagePayment'>Mortgage Payment:</label>
          <input id='mortgagePayment'
            defaultValue={`$${this.schedule.payment.format(2)}`}
            ref={(input) => { this.domElements.payment = input; }}>
          </input>
        </div>
        <div>
          <label htmlFor='mortgageStartDate'>Mortgage Start Date:</label>
          <input id='mortgageStartDate'
            defaultValue={this.schedule.startDate}
            ref={(input) => { this.domElements.startDate = input; }}>
          </input>
        </div>
        <div>
          <label htmlFor='mortgageInterestRate'>Interest Rate:</label>
          <input id='mortgageInterestRate' defaultValue={this.schedule.interestRate}
            ref={(input) => { this.domElements.interestRate = input; }}>
          </input>
        </div>
        <button onClick={this.onClick.bind(this)}>Calculate</button>
      </section>
    );
  }

  formatNumber(number) {
    return Number(number.replace(',', '').replace('$', ''));
  }
}
