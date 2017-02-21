import React from 'react';
import { Component } from 'react';
import MortgageAmount from '../mortgage//mortgageAmount';
import MortgageTerm from '../mortgage/mortgageTerm';
import MortgageInterestRate from '../mortgage/mortgageInterestRate';

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
