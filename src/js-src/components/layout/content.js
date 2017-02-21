import React from 'react';
import { Component } from 'react';
import AmortizationCalculator from '../mortgage/amortizationCalculator';
import AmartizationSchedule from '../mortgage/amortizationSchedule';

export default class Content extends Component {
  render() {
    return (
      <main className="mdl-layout__content">
        <div className="page-content">
          <AmortizationCalculator />
          <AmartizationSchedule />
        </div>
      </main>
    );
  }
}
