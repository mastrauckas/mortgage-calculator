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
      <div className='mdl-cell mdl-cell--3-col-desktop'>
        <div className='mdl-textfield mdl-js-textfield'>
          <label htmlFor='mortgagePrincipalAmount'
            className='mdl-textfield__label'
            title='Please Enter Mortgage Principal Amount'>
            Mortgage Principal Amount
            </label>
          <input id='mortgagePrincipalAmount'
            defaultValue={`$${this.schedule.principalAmount.format(2)}`}
            ref={(input) => { this.domElements.principalAmount = input; }}
            className='mdl-textfield__input'>
          </input>
        </div >
        <div className='mdl-textfield mdl-js-textfield'>
          <label htmlFor='mortgageTerm'
            className='mdl-textfield__label'>
            Mortgage Term
          </label>
          <input id='mortgageTerm'
            defaultValue={this.schedule.installments}
            ref={(input) => { this.domElements.installments = input; }}
            className='mdl-textfield__input'>
          </input>
        </div>
        <div className='mdl-textfield mdl-js-textfield'>
          <label htmlFor='mortgagePayment'
            className='mdl-textfield__label'>>
            Mortgage Payment
          </label>
          <input id='mortgagePayment'
            defaultValue={`$${this.schedule.payment.format(2)}`}
            ref={(input) => { this.domElements.payment = input; }}
            className='mdl-textfield__input'>
          </input>
        </div>
        <div className='mdl-textfield mdl-js-textfield'>
          <label htmlFor='mortgageStartDate'
            className='mdl-textfield__label'>
            Mortgage Start Date
          </label>
          <input id='mortgageStartDate'
            defaultValue={this.schedule.startDate}
            ref={(input) => { this.domElements.startDate = input; }}
            className='mdl-textfield__input'>
          </input>
        </div>
        <div className='mdl-textfield mdl-js-textfield'>
          <label htmlFor='mortgageInterestRate'
            className='mdl-textfield__label'>
            Interest Rate
          </label>
          <input id='mortgageInterestRate' defaultValue={`${this.schedule.interestRate}%`}
            ref={(input) => { this.domElements.interestRate = input; }}
            className='mdl-textfield__input'>
          </input>
        </div>
        <button onClick={this.onClick.bind(this)}
          className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored'>
          Calculate Your Mortgage
        </button>
      </div>
    );
  }

  formatNumber(number) {
    return number.replace(new RegExp('(\\$|,|\\%)', 'g'), '');
  }
}
