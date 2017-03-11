import React from 'react';
import { Component } from 'react';
import AmortizationCalculator from '../mortgage/amortizationCalculator';
import AmortizationSchedule from '../mortgage/amortizationSchedule';

export default class Content extends Component {
  render() {
    return (
      <main className="mdl-layout__content">
        <div className="page-content">
          <div className="mdl-grid">
            <AmortizationCalculator />
            <AmortizationSchedule />
          </div>
        </div>
      </main>
    );
  }
}
