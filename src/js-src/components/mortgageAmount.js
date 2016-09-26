import React from 'react';
import { Component } from 'react';

export default class MortgageAmount extends Component {
  render() {
    return (
        <div>
          <label htmlFor='mortageAmount'>Mortgage amount:</label>
          <input id='mortageAmount'></input>
        </div>
    );
  }
}
