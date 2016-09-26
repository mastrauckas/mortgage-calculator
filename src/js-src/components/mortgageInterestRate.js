import React from 'react';
import { Component } from 'react';

export default class MortgageInterestRate extends Component {
  render() {
    return (
        <div>
          <label htmlFor='mortgageInterestRate'>Interest Rate:</label>
          <input id='mortgageInterestRate'></input>
        </div>
    );
  }
}
