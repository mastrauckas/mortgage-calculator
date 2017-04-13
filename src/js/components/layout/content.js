import React from 'react';
import { Component } from 'react';
import AmortizationCalculator from '../mortgage/amortizationCalculator';
import AmortizationSchedule from '../mortgage/amortizationSchedule';
import { Grid } from 'react-flexbox-grid';

export default class Content extends Component {
  render() {
    return (
      <Grid fluid>
        <AmortizationCalculator />
        <AmortizationSchedule />
      </Grid>
    );
  }
}
