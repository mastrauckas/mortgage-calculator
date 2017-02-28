import React from 'react';
import { Component } from 'react';
import MortgagePrincipalAmount from './mortgagePrincipalAmount';
import MortgageTerm from './mortgageTerm';
import MortgageInterestRate from './mortgageInterestRate';
import MortgagePayment from './mortgagePayment';
import AmortizationScheduleActions from '../../actions/amortizationScheduleActions';

export default class AmortizationCalculator extends Component {
  constructor() {
    super();
    const schedule = {
      principalAmount: 136068.31,
      startDate: '02/27/2017',
      installments: 360,
      payment: 777.98,
      interestRate: 3.75
    };
    this.state = schedule;
    AmortizationScheduleActions.getAmortizationSchedule(schedule);
  }
  render() {
    return (
      <section>
        <MortgagePrincipalAmount principalAmount={this.state.principalAmount} />
        <MortgageTerm installments={this.state.installments} />
        <MortgagePayment payment={this.state.payment} />
        <MortgageInterestRate interestRate={this.state.interestRate} />
      </section>
    );
  }
}
