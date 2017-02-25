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
          dueDate: '1/1/2017',
          interestAmount: 100.00,
          principalAmount: 200.10,
          totalDue: 300.10
        },
        {
          installmentNumber: 2,
          dueDate: '2/1/2017',
          interestAmount: 200.11,
          principalAmount: 300.10,
          totalDue: 400.10
        },
        {
          installmentNumber: 3,
          dueDate: '3/1/2017',
          interestAmount: 300.10,
          principalAmount: 400.10,
          totalDue: 500.10
        }
      ],
    };
  }
  render() {
    const AmortizationScheduleItemComponent = this.state.amortizationSchedule.map(item => {
      return <AmortizationScheduleItem key={item.installmentNumber} {...item} />;
    });

    return (
      <table>
        <caption>Amortization Schedule</caption>
        <thead>
          {AmortizationScheduleItemComponent}
        </thead>
        <tbody>
        </tbody>
        <tfoot>
        </tfoot>
      </table>
    );
  }
}
