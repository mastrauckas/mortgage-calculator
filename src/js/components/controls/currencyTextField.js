import React from 'react';
import { Component } from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import NumberFormatter from '../../common/numberFormatter';

export default class CurrencyTextField extends Component {

  constructor(props) {
    super();
    this.state = {
      value: props.value ? NumberFormatter.formatCurrency(props.value.toString()) : ''
    };
  }

  static propTypes = {
    onNewValueChange: PropTypes.func,
    value: PropTypes.string
  }

  removeCurrencySymbols(string) {
    return NumberFormatter.removeSymbols(string, '\\$', ',');
  }

  focus() {
    const input = this.input;
    input.setSelectionRange(0, input.value.length);
  }

  change(input, newValue) {
    let value = this.removeCurrencySymbols(newValue);
    if (NumberFormatter.isNumber(value)) {
      const currentAmount = this.removeCurrencySymbols(this.state.value);
      value = NumberFormatter.removeExtraDecimalNumbers(value, 2);
      if (currentAmount !== value) {
        this.setState({
          value: NumberFormatter.formatCurrency(value)
        });
      }
      if (this.props.onNewValueChange) {
        this.props.onNewValueChange(parseFloat(value));
      }
    } else if (value.length === 0) {
      this.setState({
        value: '$'
      });
    }
  }

  blur() {
    const value = this.removeCurrencySymbols(this.state.value);
    if (!NumberFormatter.isNumber(value) || value.length === 0) {
      this.setState({
        value: ''
      });
    } else if (NumberFormatter.howManyDecimalPlaces(value) !== 2) {
      this.setState({
        value: NumberFormatter.formatCurrency(NumberFormatter.trailZeros(value, 2))
      });
    }
  }

  render() {
    const {
      onNewValueChange, // eslint-disable-line no-unused-vars
      value, // eslint-disable-line no-unused-vars
      ...other
    } = this.props;

    return (
      <TextField
        ref={e => {
          if (this.input === undefined) {
            this.input = e.input;
          }
        }}

        value={this.state.value}
        onFocus={this.focus.bind(this)}
        onChange={this.change.bind(this)}
        onBlur={this.blur.bind(this)}
        {...other } >
      </TextField >
    );
  }
}
