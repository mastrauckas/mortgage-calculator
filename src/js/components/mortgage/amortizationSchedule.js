import React from 'react';
import { Component } from 'react';
import AmortizationScheduleItem from './amortizationScheduleItem';
import AmortizationScheduleStore from '../../stores/amortizationScheduleStore';
import { Table, TableHeader, TableBody, TableRow, TableHeaderColumn } from 'material-ui/Table';
import { Tabs, Tab } from 'material-ui/Tabs';

export default class AmortizationSchedule extends Component {
  constructor() {
    super();
    this.state = {
      amortizationSchedule: [],
    };
  }

  componentWillMount() {
    AmortizationScheduleStore.on('change', this.amortizationScheduleChanged.bind(this));
  }

  amortizationScheduleChanged() {
    this.setState({
      amortizationSchedule: AmortizationScheduleStore.getAmortizationScheduleData()
    });
  }

  render() {
    const AmortizationScheduleItemComponent = this.state.amortizationSchedule.map(installment => {
      return <AmortizationScheduleItem key={installment.installmentNumber} {...installment} />;
    });

    return (
      <div className='col-md-9'>
        <Table selectable={false}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn colSpan='6'>
                <Tabs>
                  <Tab label='Summary'>
                    <h1>Mortgage Summary</h1>
                  </Tab>
                  <Tab label='1-10 Years'>
                    <h1>Hello 1-10 Years</h1>
                  </Tab>
                  <Tab label='11-20 Years'>
                    <h1>Hello 11-21 Years</h1>
                  </Tab>
                  <Tab label='21-30 Years'>
                    <h1>Hello 21-30 Years</h1>
                  </Tab>
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
            {AmortizationScheduleItemComponent}
          </TableBody>
        </Table>
      </div>
    );
  }
}
