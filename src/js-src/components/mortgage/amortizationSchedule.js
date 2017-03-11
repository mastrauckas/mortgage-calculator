import React from 'react';
import { Component } from 'react';
import AmortizationScheduleItem from './amortizationScheduleItem';
import AmortizationScheduleStore from '../../stores/amortizationScheduleStore';

export default class AmortizationSchedule extends Component {
  constructor() {
    super();
    this.state = {
      amortizationSchedule: [],
    };
  }

  componentWillMount() {
    AmortizationScheduleStore.on('change', this.amortizationScheduleChanged.bind(this));
  }

  amortizationScheduleChanged() {
    this.setState({
      amortizationSchedule: AmortizationScheduleStore.getAmortizationScheduleData()
    });
  }

  render() {
    const AmortizationScheduleItemComponent = this.state.amortizationSchedule.map(installment => {
      return <AmortizationScheduleItem key={installment.installmentNumber} {...installment} />;
    });

    return (
      <div className='mdl-cell mdl-cell--9-col-desktop'>
        <table className='mdl-data-table mdl-js-data-table'>
          <caption>Amortization Schedule</caption>
          <thead>
            <tr>
              <th className='mdl-data-table__cell--non-numeric'>Installment</th>
              <th className='mdl-data-table__cell--non-numeric'>Payment Date</th>
              <th className='mdl-data-table__cell--non-numeric'>Payment</th>
              <th className='mdl-data-table__cell--non-numeric'>Interest Amount</th>
              <th className='mdl-data-table__cell--non-numeric'>Principal Amount</th>
              <th className='mdl-data-table__cell--non-numeric'>Balance</th>
            </tr>
          </thead>
          <tbody>
            {AmortizationScheduleItemComponent}
          </tbody>
        </table>
      </div>
    );
  }
}
