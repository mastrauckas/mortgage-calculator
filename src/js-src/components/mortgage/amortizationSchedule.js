import React from 'react';
import { Component } from 'react';

export default class AmortizationSchedule extends Component {
  render() {
    return (
      <table>
        <caption>Amortization Schedule</caption>
        <thead>
          <tr>
            <th>Date</th>
            <th>Payment</th>
            <th>Principal</th>
            <th>Interest</th>
            <th>Total Interest</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>8/1/2014</td>
            <td>100</td>
            <td>200</td>
            <td>300</td>
            <td>400</td>
            <td>700</td>
          </tr>
        </tbody>
        <tfoot>
        </tfoot>
      </table>
    );
  }
}
