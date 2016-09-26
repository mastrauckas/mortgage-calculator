import React from 'react';
import { Component } from 'react';
import MortgageAmount from './mortgageAmount';
import MortgageTerm from './mortgageTerm';
import MortgageInterestRate from './mortgageInterestRate';

export default class AmortizationCalculator extends Component {
  render() {
    return (
      <section>
        <MortgageAmount />
        <MortgageTerm />
        <MortgageInterestRate />
      </section>

    );
  }
}
