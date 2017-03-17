import React from 'react';
import { Component } from 'react';
import AmortizationCalculator from '../mortgage/amortizationCalculator';
import AmortizationSchedule from '../mortgage/amortizationSchedule';

export default class Content extends Component {
  render() {
    return (
      <main className="container">
        <div className='row'>
          <AmortizationCalculator />
          <AmortizationSchedule />
        </div>
      </main>
    );
  }
}
