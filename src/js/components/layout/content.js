import React from 'react';
import { Component } from 'react';
import AmortizationCalculator from '../mortgage/amortizationCalculator';
import AmortizationTabs from '../mortgage/amortizationTabs';

export default class Content extends Component {
  render() {
    return (
      <main className="container">
        <div className='row'>
          <AmortizationCalculator />
          <AmortizationTabs />
        </div>
      </main>
    );
  }
}
