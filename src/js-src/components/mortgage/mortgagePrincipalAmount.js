import React from 'react';
import { Component } from 'react';

export default class MortgagePrincipalAmount extends Component {
  static propTypes = {
    principalAmount: React.PropTypes.number.isRequired
  }

  render() {
    return (
      <div>
        <label htmlFor='mortgagePrincipalAmount'>Mortgage Principal Amount:</label>
        <input id='mortgagePrincipalAmount' value={this.props.principalAmount.toFixed(2)} ></input>
      </div>
    );
  }
}
