import React from 'react';
import { Component } from 'react';
import Sugar from 'sugar';
import AmortizationScheduleActions from '../../actions/amortizationScheduleActions';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import { Row, Col } from 'react-flexbox-grid';
import CurrencyTextField from '../controls/currencyTextField';
import PercentTextField from '../controls/percentTextField';
import NaturalNumberTextField from '../controls/naturalNumberTextField';

export default class AmortizationCalculator extends Component {

  constructor() {
    super();
    Sugar.extend();

    this.schedule = {
      principalAmount: 136068.31,
      startDate: new Date('02/27/2017'),
      installments: 360,
      payment: 777.98,
      interestRate: 3.75
    };

    AmortizationScheduleActions.getAmortizationScheduleAction(this.schedule);
    this.state = {
      amount: '',
      hasDecimal: true
    };
  }

  onClick() {
    AmortizationScheduleActions.getAmortizationScheduleAction({
      principalAmount: this.schedule.principalAmount,
      startDate: this.schedule.startDate,
      installments: this.schedule.installments,
      payment: this.schedule.payment,
      interestRate: this.schedule.interestRate
    });
  }

  render() {
    const styleTextFields = {
      width: '170px',
    };

    return (
      <div>
        <Row center='sm'>

          <Col sm={2}>
            <CurrencyTextField
              style={styleTextFields}
              name='mortgagePrincipal'
              floatingLabelText='Principal Amount'
              type='text'
              value={this.schedule.principalAmount.toString()}
              onNewValueChange={(value) => this.schedule.principalAmount = value} />
          </Col>

          <Col sm={2}>
            <CurrencyTextField
              style={styleTextFields}
              name='paymentAmount'
              floatingLabelText='Payment Amount'
              type="text"
              value={this.schedule.payment.toString()}
              onNewValueChange={(value) => this.schedule.payment = value} />
          </Col>

          <Col sm={2}>
            <DatePicker
              textFieldStyle={styleTextFields}
              floatingLabelText='Start Date'
              formatDate={(date) => {
                return `${('0' + (date.getMonth() + 1)).slice(-2)}/${('0' + date.getDate()).slice(-2)}/${date.getFullYear()}`;
              }}
              name='paymentDate'
              mode="landscape"
              defaultDate={this.schedule.startDate}
              onChange={(input, newValue) => this.schedule.startDate = newValue} />
          </Col>

          <Col sm={2}>
            <NaturalNumberTextField
              style={styleTextFields}
              name='mortgageTerm'
              floatingLabelText='Term Length'
              type="text"
              value={this.schedule.installments.toString()}
              onNewValueChange={(value) => this.schedule.installments = value} />
          </Col>

          <Col sm={2}>
            <PercentTextField
              style={styleTextFields}
              floatingLabelText='Interest Rate'
              type='text'
              value={this.schedule.interestRate.toString()}
              onNewValueChange={(value) => this.schedule.interestRate = value} />
          </Col>

        </Row>

        <Row center='sm' style={{ marginBottom: '2em', marginTop: '0.5em' }}>
          <Col sm>
            <RaisedButton label='Calulate my Mortgage'
              onClick={this.onClick.bind(this)} />
          </Col>
        </Row>
      </div>
    );
  }
}
