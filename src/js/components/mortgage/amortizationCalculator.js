import React from 'react';
import { Component } from 'react';
import Sugar from 'sugar';
import AmortizationScheduleActions from '../../actions/amortizationScheduleActions';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
//import DatePicker from 'material-ui/DatePicker';
import { Row, Col } from 'react-flexbox-grid';

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

  convertMortgage(schedule) {
    return {
      principalAmount: `$${schedule.principalAmount.format(2)}`,
      startDate: this.schedule.startDate,
      installments: this.schedule.installments.toString(),
      payment: `$${this.schedule.payment.format(2)}`,
      interestRate: `${this.schedule.interestRate}%`
    };
  }

  onClick() {
    AmortizationScheduleActions.getAmortizationScheduleAction({
      principalAmount: parseFloat(this.schedule.principalAmount),
      startDate: new Date(this.schedule.startDate),
      installments: parseInt(this.schedule.installments),
      payment: parseFloat(this.schedule.payment),
      interestRate: parseFloat(this.schedule.interestRate)
    });
  }

  onClickElement(element) {
    element.setSelectionRange(0, element.value.length);
  }

  isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  removeCurrencySymbols(number) {
    return number.replace(new RegExp('\\$|,', 'g'), '');
    //return number.replace(new RegExp('(\\$|,|\\%)', 'g'), '');
  }

  howManyDecimalPlaces(number) {
    return (number.split('.')[1] || []).length;
  }

  removeExtraDecimalNumbers(number, decimalPaces) {
    const totalRemove = this.howManyDecimalPlaces(number) - decimalPaces;
    return totalRemove > 0 ? number.slice(0, -totalRemove) : number;
  }

  formatCurrency(number) {
    const numbers = number.split('.');
    return `$${numbers[0].reverse().match(/\d{1,3}/g).join(',').reverse()}${numbers.length > 1 ? '.'.concat(numbers[1]) : ''}`;
  }

  trailZeros(number, decimalPaces) {
    const totalZeros = decimalPaces - this.howManyDecimalPlaces(number) + 1;
    console.log(Array(+(totalZeros > 0 && totalZeros)).join('0'));
    return `${number}${number.indexOf('.') === -1 ? '.' : ''}${Array(+(totalZeros > 0 && totalZeros)).join('0')}`;
  }

  render() {
    const styleTextFields = {
      width: '170px',
    };

    return (
      <div>
        <Row center='sm'>

          <Col sm={2}>
            <TextField
              ref={e => {
                if (this.principalAmountElement === undefined) {
                  this.principalAmountElement = e.input;
                }
              }}
              style={styleTextFields}
              name='mortgagePrincipal'
              floatingLabelText='Principal Amount'
              type='text'
              value={this.state.amount}
              onBlur={() => {
                const amount = this.removeCurrencySymbols(this.state.amount);
                if (!this.isNumber(amount) || amount.length === 0) {
                  this.setState({
                    amount: ''
                  });
                } else if (this.howManyDecimalPlaces(amount) !== 2) {
                  this.setState({
                    amount: this.trailZeros(amount, 2)
                  });
                }
              }}
              onChange={(input, newValue) => {
                let value = this.removeCurrencySymbols(newValue);
                if (this.isNumber(value)) {
                  const currentAmount = this.removeCurrencySymbols(this.state.amount);
                  value = this.removeExtraDecimalNumbers(value, 2);
                  if (currentAmount !== value) {
                    this.setState({
                      amount: this.formatCurrency(value)
                    });
                  }
                } else if (value.length === 0) {
                  this.setState({
                    amount: '$'
                  });
                }
              }}
              onClick={() => this.onClickElement(this.principalAmountElement)}
            />
          </Col>


          {/*<Col sm={2}>
            <TextField
              style={styleTextFields}
              name='mortgageTerm'
              floatingLabelText='Term Lenght'
              type="text"
              value={this.state.installments}
              onChange={(input, newValue) => { this.schedule.installments = Number(newValue); }} />
          </Col>

          <Col sm={2}>
            <TextField
              style={styleTextFields}
              floatingLabelText='Payment Amount'
              type="text"
              value={this.state.payment}
              onChange={(input, newValue) => { this.schedule.payment = this.removeCurrencySymbols(newValue); }} />
          </Col>

          <Col sm={2}>
            <DatePicker
              floatingLabelText='Start Date'
              mode="landscape"
              value={this.state.startDate}
              onChange={(input, newValue) => { this.schedule.startDate = new Date(newValue); }} />
          </Col>

          <Col sm={2}>
            <TextField
              style={styleTextFields}
              floatingLabelText='Interest Rate'
              type="text"
              value={this.state.interestRate}
              onChange={(input, newValue) => { this.schedule.interestRate = this.removeCurrencySymbols(newValue); }} />
          </Col>*/}

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
