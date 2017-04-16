import React from 'react';
import { Component } from 'react';
import AmortizationScheduleItem from './amortizationScheduleItem';
import AmortizationScheduleStore from '../../stores/amortizationScheduleStore';
import MortgageSmmary from './mortgageSummary';
import { Table, TableHeader, TableBody, TableRow, TableHeaderColumn } from 'material-ui/Table';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Row, Col } from 'react-flexbox-grid';
import Sugar from 'sugar';

export default class AmortizationSchedule extends Component {
  AmortizationScheduleDecadeSets = []

  decades = []
  decadeTab = undefined
  YEAR = 12
  DECADE = 10
  YEARS_IN_DECADE = this.DECADE * this.YEAR;

  constructor() {
    super();
    Sugar.extend();
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
    const mortgageInformation = AmortizationScheduleStore.getAmortizationScheduleData();
    this.mortgageSmmary = this.getMortgageSummary(mortgageInformation);
    this.AmortizationScheduleDecadeSets =
      this.getAmortizationScheduleDecadeSets(mortgageInformation.amortizationSchedule);
    this.decades = this.AmortizationScheduleDecadeSets[0];
    this.setState({
      amortizationSchedule: this.decades[0]
    });
  }

  getMortgageSummary(mortgageInformation) {
    const totalInterest = mortgageInformation.amortizationSchedule
      .reduce((total, item) => item.interestAmount + total, 0);

    const turnOver = mortgageInformation.amortizationSchedule
      .find(value => value.principalAmount > value.interestAmount);

    const turnOverYearsAndMonths =
      this.convertDecimalToYearsAndMonths(turnOver.installmentNumber / this.YEAR);

    const turnOverDate = turnOver.paymentDate;

    const totalPaid = totalInterest + mortgageInformation.schedule.principalAmount;
    const percentInterest = totalInterest / totalPaid * 100;

    const lastInstallmentItem = mortgageInformation.amortizationSchedule.slice(-1).pop();
    const mortgageTotalPayments = lastInstallmentItem.installmentNumber;
    const mortgageTotalYearsAndMonth =
      this.convertDecimalToYearsAndMonths(mortgageTotalPayments / this.YEAR);
    const lastPaymentDate = lastInstallmentItem.paymentDate;

    return {
      ...mortgageInformation.schedule,
      totalInterest,
      totalPaid,
      percentInterest,
      turnOverDate,
      turnOverYearsAndMonths,
      mortgageTotalPayments,
      mortgageTotalYearsAndMonth,
      lastPaymentDate
    };
  }

  convertDecimalToYearsAndMonths(decimal) {
    return `${Math.trunc(decimal)} Year(s) and ${Math.round((decimal * 12) % 12)} Month(s)`;
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
      <Row>
        <Col md={12}>
          <Tabs>
            <Tab label='Mortgage Summary'>
              {<MortgageSmmary {...this.mortgageSmmary} />}
            </Tab>
            <Tab label='Mortgage Amortization Schedule'>
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
                    <TableHeaderColumn tooltip="The payment number"
                      style={{ textAlign: 'center' }}>
                      Payment Number
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
              </Table>
            </Tab>
          </Tabs>
        </Col>
      </Row >
    );
  }
}
