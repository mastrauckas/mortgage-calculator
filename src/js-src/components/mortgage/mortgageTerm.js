import React from 'react';
import { Component } from 'react';

export default class MortgageTerm extends Component {
  static propTypes = {
    installments: React.PropTypes.number.isRequired
  }

  render() {
    return (
      <div>
        <label htmlFor='mortgageTerm'>Mortgage Term:</label>
        <input id='mortgageTerm' value={this.props.installments}></input>
      </div>
    );
  }
}
