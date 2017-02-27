import React from 'react';
import { Component } from 'react';

export default class MortgageInterestRate extends Component {
  static propTypes = {
    interestRate: React.PropTypes.number.isRequired,
  }

  render() {
    return (
      <div>
        <label htmlFor='mortgageInterestRate'>Interest Rate:</label>
        <input id='mortgageInterestRate' value={this.props.interestRate.toFixed(5)}></input>
      </div>
    );
  }
}
