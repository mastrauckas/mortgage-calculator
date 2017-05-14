import React from 'react';
import { Component } from 'react';
import Sugar from 'sugar';
import AmortizationScheduleActions from '../../actions/amortizationScheduleActions';
import RaisedButton from 'material-ui/RaisedButton';
import DatePicker from 'material-ui/DatePicker';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import { Row, Col } from 'react-flexbox-grid';
import CurrencyTextField from '../controls/currencyTextField';
import PercentTextField from '../controls/percentTextField';
import NaturalNumberTextField from '../controls/naturalNumberTextField';

export default class AmortizationCalculator extends Component {

  constructor() {
    super();
    Sugar.extend();

    this.schedule = {
      principalAmount: 200000.00,
      startDate: new Date('02/27/2017'),
      installments: 360,
      payment: 1000,
      interestRate: 3.75
    };

    AmortizationScheduleActions.getAmortizationScheduleActionWithTermLength(this.schedule);
    this.state = {
      calculatePayment: true,
      paymentVisable: {
        display: 'none'
      },
      termVisable: {
        display: 'inherit'
      }
    };
  }

  onClick() {
    if (this.state.calculatePayment) {
      AmortizationScheduleActions.getAmortizationScheduleActionWithTermLength({
        principalAmount: this.schedule.principalAmount,
        startDate: this.schedule.startDate,
        installments: this.schedule.installments,
        interestRate: this.schedule.interestRate
      });
    } else {
      AmortizationScheduleActions.getAmortizationScheduleActionWithPaymentAmount({
        principalAmount: this.schedule.principalAmount,
        startDate: this.schedule.startDate,
        payment: this.schedule.payment,
        interestRate: this.schedule.interestRate
      });
    }
  }

  onChange(event, value) {
    if (value === 'caculatePayment') {
      this.setState({
        calculatePayment: true,
        paymentVisable: {
          display: 'none'
        },
        termVisable: {
          display: 'inherit'
        }
      });
    } else {
      this.setState({
        calculatePayment: false,
        paymentVisable: {
          display: 'inherit'
        },
        termVisable: {
          display: 'none'
        }
      });
    }
  }

  render() {
    const styleTextFields = {
      width: '170px',
    };

    const styleRadioBoxs = {
      display: 'auto',
      marginTop: '20px',
      marginBottom: '10px'
    };

    const styRadioBoxesLabel = {
      width: 'none'
    };

    return (
      <div>
        <RadioButtonGroup
          defaultSelected='caculatePayment'
          style={{ display: 'flex' }}
          className='row center-sm'
          name='mortgageType'
          onChange={this.onChange.bind(this)}>
          <RadioButton
            value='caculatePayment'
            label='Caculate Payment'
            style={styleRadioBoxs}
            labelStyle={styRadioBoxesLabel}
            className='col-sm-2' />
          <RadioButton
            value='caculateTerm'
            label='Set Your Own Payment'
            style={styleRadioBoxs}
            labelStyle={styRadioBoxesLabel}
            className='col-sm-2' />
        </RadioButtonGroup>
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

          <Col sm={2} style={this.state.paymentVisable}>
            <CurrencyTextField
              style={styleTextFields}
              name='paymentAmount'
              floatingLabelText='Payment Amount'
              type="text"
              value={this.schedule.payment.toString()}
              onNewValueChange={(value) => this.schedule.payment = value} />
          </Col>

          <Col sm={2} style={this.state.termVisable}>
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

        </Row>

        <Row center='sm' style={{ marginBottom: '2em', marginTop: '0.5em' }}>
          <Col sm>
            <RaisedButton label='Calulate my Mortgage'
              onClick={this.onClick.bind(this)} />
          </Col>
        </Row>
      </div >
    );
  }
}
