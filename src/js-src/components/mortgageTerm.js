import React from 'react';
import { Component } from 'react';

export default class MortgageTerm extends Component {
  render() {
    return (
        <div>
          <label htmlFor='mortgageTerm'>Mortgage Term:</label>
          <input id='mortgageTerm'></input>
        </div>
    );
  }
}
