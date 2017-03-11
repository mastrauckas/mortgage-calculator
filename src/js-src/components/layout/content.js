import React from 'react';
import { Component } from 'react';
import AmortizationCalculator from '../mortgage/amortizationCalculator';
import AmortizationSchedule from '../mortgage/amortizationSchedule';
import InfoHeader from './infoHeader';

export default class Content extends Component {
  render() {
    return (
      <main className="container">
        <div className='row center'>
          <InfoHeader />
        </div>
        <div className='row'>
          <AmortizationCalculator />
          <AmortizationSchedule />
        </div>
      </main>
    );
  }
}
