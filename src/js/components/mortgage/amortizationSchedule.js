import React from 'react';
import { Component } from 'react';
import AmortizationScheduleItem from './amortizationScheduleItem';
import AmortizationScheduleStore from '../../stores/amortizationScheduleStore';
import { Table, TableHeader, TableBody, TableRow, TableHeaderColumn } from 'material-ui/Table';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Col } from 'react-flexbox-grid';

export default class AmortizationSchedule extends Component {
  AmortizationScheduleDecadeSets = []
  decades = []
  decadeTab = undefined
  YEAR = 12
  DECADE = 10
  YEARS_IN_DECADE = this.DECADE * this.YEAR;

  constructor() {
    super();
    this.state = {
      amortizationSchedule: [],
    };
  }

  componentWillMount() {
    AmortizationScheduleStore.on('change', this.amortizationScheduleChanged.bind(this));
  }

  clickDecadeTabs(value) {
    this.decades = this.AmortizationScheduleDecadeSets[value];
    this.decadeTab.value = 0;
    this.setState({
      amortizationSchedule: this.decades[0]
    });
  }

  clickYearTab(value) {
    this.setState({
      amortizationSchedule: this.decades[value]
    });
  }

  amortizationScheduleChanged() {
    const amortizationSchedule = AmortizationScheduleStore.getAmortizationScheduleData();
    this.AmortizationScheduleDecadeSets = this.getAmortizationScheduleDecadeSets(amortizationSchedule);
    this.decades = this.AmortizationScheduleDecadeSets[0];
    this.setState({
      amortizationSchedule: this.decades[0]
    });
  }

  getAmortizationScheduleDecadeSets(amortizationSchedule) {
    var all = [];
    for (let currentDecade = 0; currentDecade < amortizationSchedule.length / this.YEARS_IN_DECADE; currentDecade++) {
      const decade = [];
      let years = Math.ceil((amortizationSchedule.length - (all.length * this.YEARS_IN_DECADE)) / this.YEAR);
      years = years > this.DECADE ? this.DECADE : years;
      for (let year = 0; year < years; year++) {
        const start = (currentDecade * this.YEARS_IN_DECADE) + (year * this.YEAR);
        const end = start + this.YEAR;
        decade.push(amortizationSchedule.slice(start, end));
      }
      all.push(decade);
    }
    return all;
  }

  getAllAmortizationScheduleItemComponents() {
    return this.state.amortizationSchedule.map(installment => {
      return <AmortizationScheduleItem key={installment.installmentNumber} {...installment} />;
    });
  }

  getAmortizationScheduleDecadeTabComponents() {
    return this.AmortizationScheduleDecadeSets.map(decade => {
      const indexYears = this.AmortizationScheduleDecadeSets.indexOf(decade);
      const from = indexYears * this.DECADE + 1;
      const to = from + this.AmortizationScheduleDecadeSets[indexYears].length - 1;
      const label = `${from}-${to} Years`;
      const tabYearsItemComponents = decade.map(y => {
        const indexYear = decade.indexOf(y) + 1;
        const year = indexYear + (indexYears * this.DECADE);
        const label = `Year ${year}`;
        return <Tab key={year - 1} value={indexYear - 1} label={label} />;
      });
      return (
        <Tab key={indexYears} label={label} value={indexYears}>
          <Tabs onChange={this.clickYearTab.bind(this)}>
            {tabYearsItemComponents}
          </Tabs>
        </Tab>
      );
    });
  }

  render() {
    const tabDecadeItemComponents = this.getAmortizationScheduleDecadeTabComponents();
    const AmortizationScheduleItemComponents = this.getAllAmortizationScheduleItemComponents();

    return (
      <Col md={9}>
        <Table selectable={false}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn colSpan='6'>
                <Tabs ref={(input) => { this.decadeTab = input; }}
                  onChange={this.clickDecadeTabs.bind(this)}>
                  {tabDecadeItemComponents}
                </Tabs>
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="The installment number"
                style={{ textAlign: 'center' }}>
                Installment
              </TableHeaderColumn>
              <TableHeaderColumn tooltip="The date the payment will be due."
                style={{ textAlign: 'center' }}>
                Payment Date
              </TableHeaderColumn>
              <TableHeaderColumn tooltip="The payment amount."
                style={{ textAlign: 'center' }}>
                Payment
              </TableHeaderColumn>
              <TableHeaderColumn tooltip="How much went toward interest for the payment."
                style={{ textAlign: 'center' }}>
                Interest Amount
              </TableHeaderColumn>
              <TableHeaderColumn tooltip="How much went toward the principal for the payment."
                style={{ textAlign: 'center' }}>
                Principal Amount
              </TableHeaderColumn>
              <TableHeaderColumn tooltip="The balance still due."
                style={{ textAlign: 'center' }}>
                Balance
              </TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody stripedRows={true}
            displayRowCheckbox={false}>
            {AmortizationScheduleItemComponents}
          </TableBody>
        </Table >
      </Col>
    );
  }
}
