import React from 'react';
import { Component } from 'react';
import AmortizationScheduleItem from './amortizationScheduleItem';

export default class AmortizationSchedule extends Component {
  constructor() {
    super();
    this.state = {
      amortizationSchedule: [
        {
          installmentNumber: 1,
          installmentDate: '1/1/2017',
          payment: 200.54,
          interestAmount: 100.00,
          principalAmount: 200.10,
          balance: 300.10
        },
        {
          installmentNumber: 2,
          installmentDate: '2/1/2017',
          payment: 200.54,
          interestAmount: 200.11,
          principalAmount: 300.10,
          balance: 400.10
        },
        {
          installmentNumber: 3,
          installmentDate: '3/1/2017',
          payment: 200.54,
          interestAmount: 300.10,
          principalAmount: 400.10,
          balance: 500.10
        }
      ],
    };
  }
  render() {
    const AmortizationScheduleItemComponent = this.state.amortizationSchedule.map(installment => {
      return <AmortizationScheduleItem key={installment.installmentNumber} {...installment} />;
    });

    return (
      <table>
        <caption>Amortization Schedule</caption>
        <thead>
          <tr>
            <th>Installment</th>
            <th>Installment Date</th>
            <th>Payment</th>
            <th>Interest Amount</th>
            <th>Principal Amount</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {AmortizationScheduleItemComponent}
        </tbody>
      </table>
    );
  }
}
