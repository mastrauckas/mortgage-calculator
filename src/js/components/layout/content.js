import React from 'react';
import { Component } from 'react';
import AmortizationCalculator from '../mortgage/amortizationCalculator';
import AmortizationSchedule from '../mortgage/amortizationSchedule';
import { Grid, Row } from 'react-flexbox-grid';

export default class Content extends Component {
  render() {
    return (
      <Grid fluid>
        <Row>
          <AmortizationCalculator />
          <AmortizationSchedule />
        </Row>
      </Grid>
    );
  }
}
