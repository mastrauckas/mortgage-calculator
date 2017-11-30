import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import React from 'react';
import { Component } from 'react';

import NumberFormatter from '../../common/numberFormatter';

export default class NaturalNumberTextField extends Component {
  constructor(props) {
    super();
    this.state = {
      value: props.value ? props.value.toString() : '',
    };
  }

  static propTypes = {
    onNewValueChange: PropTypes.func,
    value: PropTypes.string,
  };

  change(input, newValue) {
    const value = NumberFormatter.removeSymbols(newValue, '%');
    if (NumberFormatter.isNaturalNumber(value) || value.length === 0) {
      this.setState({
        value: newValue,
      });
      if (this.props.onNewValueChange) {
        this.props.onNewValueChange(parseInt(value));
      }
    }
  }

  focus() {
    const input = this.input;
    input.setSelectionRange(0, input.value.length);
  }

  render() {
    const {
      value, // eslint-disable-line no-unused-vars
      onNewValueChange, // eslint-disable-line no-unused-vars
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
        onChange={this.change.bind(this)}
        onFocus={this.focus.bind(this)}
        {...other}
      />
    );
  }
}
